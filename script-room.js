if (document.body.classList.contains("body__room--js")) {
  const hero2 = document.querySelectorAll(".figure__hero2");
  let currentSlide = 0;

  function roll() {
    hero2[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % 2;
    hero2[currentSlide].style.opacity = 1;

    setTimeout(roll, 10000);

    hero2[currentSlide].style.opacity = 1;
  }
  roll();
}
