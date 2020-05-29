var keys = document.querySelectorAll(".key");
function removePlayingClass(event) {
    if (event.propertyName !== "transform") {
        return;
    }
    this.classList.remove("playing");
}
function play(event) {
    var keyEl = document.querySelector(".key[data-key=\"" + event.keyCode + "\"]");
    var audioEl = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]");
    if (!keyEl) {
        return;
    }
    keyEl.classList.add("playing");
    audioEl.currentTime = 0; // it will start the sound again even while it's still playing
    audioEl.play();
}
keys.forEach(function (key) {
    key.addEventListener("transitionend", removePlayingClass);
});
window.addEventListener("keydown", play);
