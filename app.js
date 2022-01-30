var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickHandler() {
    console.log("Given sentence = ",txtInput.value);
    console.log("clicked!");
}

btnTranslate.addEventListener("click", clickHandler);