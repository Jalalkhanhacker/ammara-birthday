const birthday = new Date("August 12, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");
const birthdayPage = document.getElementById("birthday");
const timer = document.getElementById("timer");
const slide = document.getElementById("slide");

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  slide.src = images[current];
}, 3000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance <= 0) {
    countdown.style.display = "none";
    birthdayPage.style.display = "flex";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
