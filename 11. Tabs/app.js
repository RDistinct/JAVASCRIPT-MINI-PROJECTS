/* Goal of this proj is to demonstate:  */

//select btn
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (event) {
  console.log(event.target); //to precisely get button clicked
  //console.log(event.currentTarget);//this will show the article
  console.log(event.target.dataset.id); //gets the data-id of element & returns undefined if data-id is missing
  const id = event.target.dataset.id;
  if (id) {
    //remove active class from other buttons
    btns.forEach((btnElement) => {
      btnElement.classList.remove("active");
      event.target.classList.add("active"); //add active class to the clicked button
    });
    //hide other articles
    articles.forEach(function (article) {
      //access each article using the article parameter
      article.classList.remove("active");
    });
    //find the article element that has same id. How it does this, I DONT KNOW???!!!

    //25th Feb 2023 after NodeSchool session an idea comes to my mind & i figure out WHY!!!
    /* The id we are getting on line 12 is either history, vision or goals for the button. We then create an element that has the SAME id we got above. Thats just it. Get an id on line 12 then create an element with the same id. PERIOD! Simple!  */
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
