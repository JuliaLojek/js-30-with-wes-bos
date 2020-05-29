var keys = document.querySelector(".keys");
function play(event) {
    var activeElKeyAttr = event.keyCode.toString();
    var activeEl = keys.querySelector("[data-key=\"" + activeElKeyAttr + "\"]");
    if (!activeEl) {
        return;
    }
    activeEl.classList.add("playing");
    setTimeout(function () { return activeEl.classList.remove("playing"); }, 200);
    var activeAudioEl = document.querySelector("audio[data-key=\"" + activeElKeyAttr + "\"]");
    activeAudioEl.play();
}
window.addEventListener("keydown", function (event) { return play(event); });
