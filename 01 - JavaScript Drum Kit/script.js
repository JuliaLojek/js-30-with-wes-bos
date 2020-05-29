var keys = document.querySelector(".keys");
var SOUND_IDS = {
    KeyA: "65",
    KeyS: "83",
    KeyD: "68",
    KeyF: "70",
    KeyG: "71",
    KeyH: "72",
    KeyJ: "74",
    KeyK: "75",
    KeyL: "76"
};
function play(event) {
    var activeElKeyAttr = SOUND_IDS[event.code];
    if (!activeElKeyAttr) {
        return;
    }
    var activeEl = keys.querySelector("[data-key=\"" + activeElKeyAttr + "\"]");
    activeEl.classList.add("playing");
    setTimeout(function () { return activeEl.classList.remove("playing"); }, 200);
    var activeAudioEl = document.querySelector("audio[data-key=\"" + activeElKeyAttr + "\"]");
    activeAudioEl.play();
}
window.addEventListener("keydown", function (event) { return play(event); });
