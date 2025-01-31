const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;

// Sélection des éléments des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Ajout des event listeners
arrowLeft.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
  alert("Flèche gauche cliquée");
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateCarousel(currentIndex);
});

arrowRight.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
  alert("Flèche droite cliquée");
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateCarousel(currentIndex);
});

// Ajout des bullet points
const dotsContainer = document.querySelector(".dots");
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
  dotsContainer.appendChild(dot);
});

function updateCarousel(index) {
  const bannerImg = document.querySelector(".banner-img");
  const bannerText = document.querySelector("#banner p");
  const dots = document.querySelectorAll(".dot");

  // Mettre à jour l'image
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

  // Mettre à jour le texte
  bannerText.innerHTML = slides[index].tagLine;

  // Mettre à jour les bullet points
  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[index].classList.add("dot_selected");
}
