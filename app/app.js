let images = document.querySelectorAll(".image");
let testimonial = document.querySelectorAll(".testimonial");
let slideLength = images.length;
let buttons = document.querySelectorAll(".button");
let prevBtn = buttons[0];
let nextBtn = buttons[1];
let currentIndex = 0;

displaySlide();

prevBtn.addEventListener("click", () => {
  console.log("prev " + currentIndex);
  if (currentIndex === 0) {
    currentIndex = slideLength - 1;
  } else {
    currentIndex--;
  }
  displaySlide();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === slideLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  displaySlide();
});

function displaySlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    testimonial[i].style.display = "none";
  }
  images[currentIndex].style.display = "block";
  testimonial[currentIndex].style.display = "flex";
}
