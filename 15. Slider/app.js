/* IMAGE SLIDER
    This project demonstrates the manipulation of DOM & CSS to slide images from right to left
    ==>  */

//select slides which gives us all slide nodelists
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

//iterate over the slides
slides.forEach(function (slide, index) {
  //we are getting the left side of a slide & calculating %age of how much we will move the slide. if its the 2nd slide its 200%
  slide.style.left = `${index * 100}%`;
});

//define counter which will keep track of our slide
let counter = 0;
nextBtn.addEventListener("click", function () {
  //increase counter
  console.log("increase counter");
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  console.log("decrease the counter");
  //decrease counter
  counter--;
  carousel();
});

function carousel() {
  //APPROACH 2 working with slides
  /* if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  } */

  //APPROACH 1 working with buttons
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    //hide the next btn
    nextBtn.style.display = "none";
  }

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  //grab all the slides once more & manipulate the transform.translate property
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-)${counter * 100}%`;
    //by default our counter is 0
  });
}

//hide prevBtn
prevBtn.style.display = "none";
