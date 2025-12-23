// Navbar script

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// project cards animation
const projectCards = document.querySelectorAll(".project-card");

const revealProjects = () => {
  const windowHeight = window.innerHeight;
  projectCards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

// skills card animation

const skillCards = document.querySelectorAll(".skill-card");

const revealSkills = () => {
  const windowHeight = window.innerHeight;
  skillCards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSkills);
window.addEventListener("load", revealSkills);

// Fade in education timeline items

const timelineItems = document.querySelectorAll(".timeline-item");

const revealTimeline = () => {
  const windowHeight = window.innerHeight;
  timelineItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      item.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);

// Fade in experience timeline items
const experienceItems = document.querySelectorAll(".experience-item");

const revealExperience = () => {
  const windowHeight = window.innerHeight;
  experienceItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      item.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealExperience);
window.addEventListener("load", revealExperience);
