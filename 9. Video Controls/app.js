//DOMContentLoaded vs Load event
//select video container & btn
//this project demonstrates how to switch a button from pause to play & vice versa while applying pause/play effect on video
//Also adds pre loader as the video loads. Once the video has loaded, we hide the preloader

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//listen for click
btn.addEventListener("click", function () {
  //check if btn has class of slide
  //console.log("Im clicked");
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

//preloader
const preloader = document.querySelector(".preloader");
//listen for load event
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
