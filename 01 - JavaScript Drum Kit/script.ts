const keys = document.querySelector(".keys")! as HTMLDivElement;

const SOUND_IDS = {
  KeyA: "65",
  KeyS: "83",
  KeyD: "68",
  KeyF: "70",
  KeyG: "71",
  KeyH: "72",
  KeyJ: "74",
  KeyK: "75",
  KeyL: "76",
}

function play(event: KeyboardEvent) {
  const activeElKeyAttr: string = SOUND_IDS[event.code];

  if (!activeElKeyAttr) {
    return;
  }
  const activeEl = keys.querySelector(`[data-key="${activeElKeyAttr}"]`)
  activeEl.classList.add("playing");
  setTimeout(() => activeEl.classList.remove("playing"), 200);

  const activeAudioEl = document.querySelector(`audio[data-key="${activeElKeyAttr}"]`) as HTMLAudioElement;
  activeAudioEl.play();
}

window.addEventListener("keydown", (event) => play(event))