const spanText = document.getElementById('hex');
const generateButton = document.getElementById('generate-btn');
const copyButton = document.getElementById('copy-btn');

//Setting Background Color
const setBackgroundColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    spanText.innerHTML = "#" + randomColor;
}

//Copy Hex Code of Color
const copyHexColor = () => {
    var copyText = document.getElementById('hex');
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}


generateButton.addEventListener("click", setBackgroundColor);
copyButton.addEventListener("click", copyHexColor);
setBackgroundColor();

