//concept behind this mini proj is that when we click on a button we get to add a class to the button if the class is not there, otherwise remove the class if its there
/*  ==>classList returns an element's class
    ==>contains() method checks if an element has a certain class
    ==>add() adds a class
    ==>remove() removes a class
    ==>toggle() toggle a class
    ==>one gotcha with links is that dont forget to add height:auto; in the css coz the links will inherit the style of the new added class which can mess the ul styles
 */
//select nav-toggle btn & links
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  console.log(links.classList); //check classes in links
  /* if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  } */
  //alternatively we can use toggle instead of adding and removing
  links.classList.toggle("show-links");
});
