/* ==> This project demonstrates use of getBoundingClientRect() method(shows size & position of an element relative to the viewport) to get the height of a section, scrollY to detect pixels scrolled */

//set date dynamic
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//select links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

/*navToggle.addEventListener("click", function () {
  //toggle classes
  //linksContainer.classList.toggle("show-links");
});*/ //the problem with this approach is that if the height of the links is fixed. what if the links are removed or more are added and the height is still the same?
//A better way is to calculate the height dynamically

//calculating height of our links using getBoundingClientRect(). It returns size of an element and its position relative to the viewport
navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height; //the partent height will be 0 by default coz in CSS its set to 0.
  const linksHeight = links.getBoundingClientRect().height;
  console.log(containerHeight, linksHeight); //but the ul height is dynamic coz its not set to a fixed value
  //now that we have 2 height values, its easy to set the container height by manipulating CSS set value
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}`;
  } else {
    linksContainer.style.height = 0;
  }
  //if containerHeight = 0 which it is by default, adjust the height of the ul height by linksHeight else set
});

/*  NOTE:
    ==>In the CSS .links-container has to have height of auto as important coz inline CSS(the one we are generating with JS) is stronger than external CSS(in our main.css). The !important keyword will overwrite the external css of getBoundingClientRect().height;  
 */

//FIXED NAVBAR =>once we scroll past the height of the navbar, set a fixed class on the nav bar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  //if scrollY is bigger than height of navbar, add a class to navbar

  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 600) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

/* smooth section scrolling */
//select all links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    //find links attribute
    //get the ID
    const id = event.currentTarget.getAttribute("href").slice(1);
    console.log(id); //about/services/tours - doesnt have the hashtag
    //using slice to select a section of a string without modifying the original string.start from the index of 1 & skip the hashtag infront of the href
    const element = document.getElementById(id); //this will help with getting the position of link

    //calculate the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav"); //keeps value of navbar if it has class fixed-nav
    let position = element.offsetTop - navHeight; //this is coz navbar is fixed so we are subtracting area covered by navbar.offsetTop returns top position of an element relative to its offsetParent
    console.log(position); //we have the position where this particular element is.
    //check if navbar is fixedNav
    if (!fixedNav) {
      //if nav contains fixed-nav,also subtract navHeight.we have already subtracted navHeight before, but when we start scrolling the navbar is out of flow
      position = position - navHeight;
    }
    if (navHeight > 82) {
      //82 is the setup of the actual navbar.If its greater than 82 which means the navbar is open
      position = position + containerHeight;
    }
    window.scrollTo({ left: 0, top: position, behavior: "smooth" });
    //close the links
    linksContainer.style.height = 0;
  });
});
