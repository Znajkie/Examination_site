var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("nav");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  nav.classList.toggle("show");
});

     if (document.body.classList.contains("body__index--js")) {
       document
         .getElementById("searchButton")
         .addEventListener("click", function () {
           window.location.href = "./booking.html";
         });
     }


if (document.body.classList.contains("body__index--js")) {
  const slides = document.querySelectorAll(".figure__hero");
  let currentSlide = 0;

  function roll() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;

    setTimeout(roll, 5000);

    slides[currentSlide].style.opacity = 1;
  }
  roll();
}

// VAR loop to delete some repetitive html for reviews and to generate random reviews.
if (document.body.classList.contains("body__index--js")) {
  var article__text = [
    "Pick your hotel with us, 5 stars with high-class rooms! We offer something to remember for life. Spa, pools, and more.",
    "Our hotel is the perfect destination for your next vacation! Luxurious accommodations, gourmet dining.",
    "Experience the ultimate relaxation at our spa resort. Unwind in our serene surroundings and enjoy world-class facilitys.",
    "Our friendly staff is dedicated to making your stay memorable. We go the extra mile to ensure your comfort.",
    "Our hotel exceeded all my expectations! The service was impeccable, and the food was divine.",
    "I had the most relaxing time at this hotel. The spa treatments were heavenly, and the staff was incredibly attentive.",
    "Staying here was a dream come true. The room had a stunning view, and the amenities were top-notch.",
    "This hotel made our honeymoon unforgettable. The romantic atmosphere and beautiful surroundings were perfect.",
    "I've never experienced such luxury before. This hotel sets a new standard for excellence in hospitality.",
    "The entire family loved our stay. There were activities for everyone, from the kids to the adults.",
    "The attention to detail at this hotel is remarkable. Every aspect of our stay was flawless.",
  ];

  // Array loop
  var elements = document.getElementsByClassName("article__text");

  for (var i = 0; i < elements.length; i++) {
    var randomIndex = Math.floor(Math.random() * article__text.length);
    elements[i].innerText = article__text[randomIndex];
  }

  var starContainers = document.querySelectorAll(".article__stars");

  // Function to generate a random number of active stars
  function getRandomNumActiveStars() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // Loop through each star container.
  starContainers.forEach(function (starContainer) {
    var numActiveStars = getRandomNumActiveStars();

    for (var i = 0; i < 5; i++) {
      var star = document.createElement("div");
      star.className = "star" + (i < numActiveStars ? " active" : "");
      starContainer.appendChild(star);
    }
  });
}