//How this works is we have a class of hidden once we click the plus button the class is deactivated & when we click minus button the class is activated
//Also we will make sure that when one option is opened, the rest are closed through traversing the DOM

//select all question btn
const btns = document.querySelectorAll(".question-btn");

//loop over the buttons and add event listener
/* btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    console.log(event.currentTarget);
    //we want to get the parent of the parent when button is clicked
    console.log(event.currentTarget.parentElement); //we get the parent element of the button
    //console.log(event.currentTarget.parentNode); //parent node can be used instead of parent element
    //to access the 'grand parent' of button, we get the parent element of the button's parent element
    const question = event.currentTarget.parentElement.parentElement;
    console.log(question); //article
    question.classList.toggle("show-text");
  });
}); */

//select question(all articles)
const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
  //console.log(element); //element is the current item we are iterating over
  //select button for each article
  const btn = element.querySelector(".question-btn"); //we are not using document coz we dont want to select all the buttons in the document. element limits where we are looking for(scope) only in the element we are looping over
  //console.log(btn);
  btn.addEventListener("click", function () {
    //iterate over article items again
    questions.forEach(function (item) {
      //item param in this callback function is referencing the button clicked
      //if the button clicked does not match with the current item that im clicking the button, remove class 'show-text' from the rest of the articles.
      //in short when you click a btn, loop over items and compare if item is same as question you have clicked the button
      //if we click the 1st item, the second & third will meet this condition
      console.log(item);
      if (item !== questions) {
        item.classList.remove("show-text");
      }
    });

    //now that we have a current button, we can add class to current article(element)
    element.classList.toggle("show-text");
  });
});
