const carouselTrack = document.getElementById("t-carousel-track");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function cardStep() {
  const card = carouselTrack.querySelector(".t-carousel-card");
  const style = getComputedStyle(carouselTrack);
  const gap = parseFloat(style.gap) || 20;

  return card.offsetWidth + gap;
}

function updateButtons() {
  const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWridth - 1;
  prevButton.disabled = carouselTrack.scrollLeft <= 0;
  nextButton.disabled = carouselTrack.scrollLeft >= maxScroll;
}

prevButton.addEventListener("click", () => {
  carouselTrack.scrollBy({ left: -cardStep(), behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
  carouselTrack.scrollBy({ left: cardStep(), behavior: "smooth" });
});

carouselTrack.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);
updateButtons();
