//color flipper

//array of different colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//select button & color span
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //console.log("im here");
  const randomColor = Math.floor(Math.random() * colors.length);
  // const randomColor2 = getRandomNumber(); - alternative
  // document.body.style.backgroundColor = colors[randomColor]; //turns the bg of body to colors[arr]
  //console.log(Math.floor(Math.random() * 10));
  //console.log(colors[randomColor]);
  //color.textContent = colors[randomColor]; //change the text content of color span tag to the value of the random generated color
  //console.log();

  //HEX color
  // document.body.style.backgroundColor = `#${randomCombi()}${randomCombi()}${randomCombi()}${randomCombi()}${randomCombi()}${randomCombi()}`;
});
//alternatively we can create a function that generates a random number and call it every time the button is clicked

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
