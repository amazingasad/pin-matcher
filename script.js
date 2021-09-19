let generateButton = document.getElementById("generate-btn");
const generatePinField = document.getElementById("random-pin-box");
let pinInputField = document.getElementById("pin-input-field");
let buttons = Array.from(document.getElementsByClassName("button"));
generateButton.addEventListener("click", function(){
    let randomPin = 1000 + Math.random() * 9000;
    let pinNumber = Math.round(randomPin);
    generatePinField.innerText = pinNumber;
})
buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "C":
                pinInputField.innerText = "";
                break;
            case "←":
                pinInputField.innerText = pinInputField.innerText.slice(0, -1);
                break;
            default:
                pinInputField.innerText += e.target.innerText;
        }
    })
});
const success = document.getElementById("success");
const failed = document.getElementById("failed");
const submitButton = document.getElementById("submit-btn");
let tryLeft = parseInt(document.getElementById("try-left").innerText);
let number1 = generatePinField.innerText;
let number2 = pinInputField.innerText;
submitButton.addEventListener("click", function(){
    if(generatePinField.innerText == pinInputField.innerText){
        success.style.display = "block";
        alert("Pin matched");
        failed.style.display = "none";
    }
    else{
        failed.style.display = "block";
        success.style.display = "none";
        tryLeft = tryLeft -1;
        document.getElementById("try-left").innerText = tryLeft;
        if(tryLeft < 0){
            document.getElementById("try-left").innerText = 0;
            alert("tries finished");
        }
    }
})