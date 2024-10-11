import dayjs from "https://unpkg.com/dayjs@1.8.9/esm/index.js";
const timer = document.querySelector(".timer");
const currentTime = dayjs();
const formattedTime = currentTime.format("H:mm");
timer.innerHTML = formattedTime;

//// TURNING TO LIGHTMODE
const outerContainer = document.querySelector(".outer-container");
const buttonEl = document.querySelector(".js-button");
buttonEl.addEventListener("click", () => {
  outerContainer.classList.toggle("light-mode");
});
