const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const successScreen = document.getElementById("successScreen");
const questionScreen = document.getElementById("questionScreen");
const catArea = document.getElementById("catArea");

// Detectar si es móvil
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

yesBtn.addEventListener("click", () => {
  questionScreen.classList.remove("active");
  successScreen.classList.add("active");
});

noBtn.addEventListener("click", () => {
  // Mostrar gatito
  catArea.style.display = "block";

  // Mover botón NO
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});