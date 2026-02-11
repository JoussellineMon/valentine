const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const successScreen = document.getElementById("successScreen");
const questionScreen = document.getElementById("questionScreen");
const catArea = document.getElementById("catArea");
const song = document.getElementById("loveSong");
const heartsBg = document.querySelector(".hearts-bg");

// Detectar si es móvil
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// 🎵 Música al primer click (por reglas del navegador)
document.body.addEventListener("click", () => {
  if (song.paused) {
    song.volume = 0.7;
    song.play();
  }
}, { once: true });

// Botón SÍ
yesBtn.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  successScreen.classList.add("active");
});

// Botón NO
noBtn.addEventListener("click", () => {
  // Mostrar gatito
  catArea.style.display = "block";

  // Mover botón NO
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 💖 Corazones flotantes random
function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = ["💖","💕","💘","💝","💗","💞"][Math.floor(Math.random() * 6)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.animationDuration = Math.random() * 6 + 6 + "s";
  heartsBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

setInterval(createHeart, 400);