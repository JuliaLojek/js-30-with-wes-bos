const secondHand = document.querySelector(".second-hand")! as HTMLDivElement;
const minuteHand = document.querySelector(".min-hand")! as HTMLDivElement;
const hourHand = document.querySelector(".hour-hand")! as HTMLDivElement;

function getTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondHandDeg = Math.round((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondHandDeg}deg)`;

  const minutes = now.getMinutes();
  const minuteHandDeg = Math.round((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteHandDeg}deg)`;

  const hours = now.getHours();
  const hourHandDeg = Math.round((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
}

setInterval(getTime, 1000);
