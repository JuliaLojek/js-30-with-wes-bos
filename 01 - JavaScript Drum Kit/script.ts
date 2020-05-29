const keys: NodeListOf<HTMLDivElement> = document.querySelectorAll(".key");

function removePlayingClass(event: TransitionEvent) {
  if (event.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

function play(event: KeyboardEvent) {
  const keyEl = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const audioEl = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  ) as HTMLAudioElement;
  if (!keyEl) {
    return;
  }
  keyEl.classList.add("playing");

  audioEl.currentTime = 0; // it will start the sound again even while it's still playing
  audioEl.play();
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removePlayingClass);
});

window.addEventListener("keydown", play);
