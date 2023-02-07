//JS for the hex page
//GENERATE HEX COLOR
/* -> has 6 params of combined numbers and leters
    ->Letters range from A-F, & numbers from 0-9
    ->So we know that the 6 params can be generated from randomly selecting fixed values coz we have the range/limit we have to work within.
    ->We can have an array with these combinations and select a value randomly
    ==> The hex letters represent: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15 */

const combination = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//my solution
/* btn.addEventListener("click", function () {
  //hex variable
  let hexColor = `#${randomCombi()}${randomCombi()}${randomCombi()}${randomCombi()}${randomCombi()}${randomCombi()} `;

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  console.log(hexColor);
}); */
//calculate random value
function randomCombi() {
  const val = combination[Math.floor(Math.random() * combination.length)];
  //console.log(val);
  return val;
}
//randomCombi(); //#random nums & letters
//console.log(hexColor);

//USING A FOR LOOP
const combination2 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
btn.addEventListener("click", function (params) {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    // hexCol = hexCol + combination2[0];
    //hexCol += combination2[0]; //#000000 -> with each iteration the value is added to hexCol. this coz we are adding to a string. If its a number, you only get one value instead of six
    hexCol += combination2[getRandomNum()];
    // each time the for loop runs it calls the getRandomNum & generates a random number which is added to the hexCol
  }
  console.log(hexCol);
  color.textContent = hexCol;
  document.body.style.backgroundColor = hexCol;
});

function getRandomNum() {
  return Math.floor(Math.random() * combination2.length);
}
