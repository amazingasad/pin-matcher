let generateButton = document.getElementById("generate-btn");
const generatePinField = document.getElementById("random-pin-box");
let pinInputField = document.getElementById("pin-input-field");
let buttons = Array.from(document.getElementsByClassName("button"));
generateButton.addEventListener("click", function(){
    let randomPin = Math.random() * 9999;
    let pinNumber = Math.round(randomPin);
    generatePinField.value = pinNumber;
})
buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "C":
                pinInputField.value = "";
                break;
            case "←":
                pinInputField.value = pinInputField.value.slice(0, -1);
                break;
            default:
                pinInputField.value += e.target.innerText;
        }
    })
});
const success = document.getElementById("success");
const failed = document.getElementById("failed");
const submitButton = document.getElementById("submit-btn");
let number1 = parseFloat(generatePinField.value);
let number2 = parseFloat(pinInputField.value);
submitButton.addEventListener("click", function(){
    if(number1 == number2){
        success.style.display = "block";
        alert("Pin matched");
    }
    else{
        failed.style.display = "block";
        alert("Pin didn't match");
    }
})