const message;
const fontColor;
const font;
const fontsize;
const bgColor;

function getDetails() {
    message = document.getElementById("messageTxt").value;
    fontColor = document.getElementById("fontcolor").value;
    font = document.getElementById("font").value;
    fontsize = document.getElementById("fontsize").value;
    bgColor = document.getElementById("bgcolor").value;
}
function makeCard() {
    getDetails();
    document.getElementById("message").innerHTML = message;
    document.getElementById("card").style.backgroundColor = bgColor;
    document.getElementById("card").style.fontFamily = font;
    document.getElementById("card").style.color = fontColor;
    document.getElementById("card").style.fontSize = fontsize;
}