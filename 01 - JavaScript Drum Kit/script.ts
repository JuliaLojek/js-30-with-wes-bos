const keys = document.querySelector(".keys")! as HTMLDivElement;

function play(event: KeyboardEvent) {
  const activeElKeyAttr: string = event.keyCode.toString();

  const activeEl = keys.querySelector(`[data-key="${activeElKeyAttr}"]`);
  if (!activeEl) {
    return;
  }
  activeEl.classList.add("playing");
  setTimeout(() => activeEl.classList.remove("playing"), 200);

  const activeAudioEl = document.querySelector(
    `audio[data-key="${activeElKeyAttr}"]`
  ) as HTMLAudioElement;
  activeAudioEl.play();
}

window.addEventListener("keydown", (event) => play(event));
