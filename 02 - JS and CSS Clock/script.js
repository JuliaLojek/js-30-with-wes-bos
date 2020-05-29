var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
function getTime() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondHandDeg = Math.round((seconds / 60) * 360) + 90;
    secondHand.style.transform = "rotate(" + secondHandDeg + "deg)";
    var minutes = now.getMinutes();
    var minuteHandDeg = Math.round((minutes / 60) * 360) + 90;
    minuteHand.style.transform = "rotate(" + minuteHandDeg + "deg)";
    var hours = now.getHours();
    var hourHandDeg = Math.round((hours / 12) * 360) + 90;
    hourHand.style.transform = "rotate(" + hourHandDeg + "deg)";
    console.log(secondHandDeg);
}
setInterval(getTime, 1000);
