if (document.body.classList.contains("body__room--js")) {
  const hero2 = document.querySelectorAll(".figure__hero2");
  let currentSlide = 0;

  function roll() {
    hero2[currentSlide].style.opacity = 0; // Hide the current slide
    currentSlide = (currentSlide + 1) % 2; // Move to the next slide (there are only 2)
    hero2[currentSlide].style.opacity = 1; // Show the next slide

    setTimeout(roll, 10000); // Adjust the delay as needed

    // Initially show the first slide
    hero2[currentSlide].style.opacity = 1;
  }
  roll();
}
