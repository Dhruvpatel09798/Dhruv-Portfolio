// mouse movement animation

const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");

let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;
let innerX = 0;
let innerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Outer cursor 
  outerX += (mouseX - outerX) * 0.15;
  outerY += (mouseY - outerY) * 0.15;

  // Inner cursor 
  innerX += (mouseX - innerX) * 0.35;
  innerY += (mouseY - innerY) * 0.35;

  cursor.style.left = `${outerX}px`;
  cursor.style.top = `${outerY}px`;

  cursorInner.style.left = `${innerX}px`;
  cursorInner.style.top = `${innerY}px`;

  requestAnimationFrame(animate);
}

animate();

/* Click feedback */
document.addEventListener("mousedown", () => {
  cursorInner.style.transform = "translate(-50%, -50%) scale(0.6)";
});

document.addEventListener("mouseup", () => {
  cursorInner.style.transform = "translate(-50%, -50%) scale(1)";
});

/* Hover interactions */
document.querySelectorAll("a, button, .card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.35)";
    cursorInner.style.transform = "translate(-50%, -50%) scale(1.4)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursorInner.style.transform = "translate(-50%, -50%) scale(1)";
  });
});






// hero section typing text animation

const words = [
  "Frontend Developer",
  "React.js Developer",
  "UI / UX Developer",
  "Web Developer",
];

const typedText = document.querySelector(".typed");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1400);
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  const typingSpeed = isDeleting ? 50 : 90;
  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
