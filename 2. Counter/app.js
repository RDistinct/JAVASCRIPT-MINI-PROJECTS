//implement change of color when count is -0 to red & green when above 1
let count = 0;

//select buttons
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

//select span
const value = document.getElementById("value");
value.style.fontSize = "20px";

//my sol
reset.addEventListener("click", resetDef);
increase.addEventListener("click", add);
decrease.addEventListener("click", subtract);

function resetDef() {
  value.style.color = "black";
  count -= count; //this resets value of count to 0
  return (value.innerHTML = count);
}

function add() {
  if (count >= 0) {
    value.style.color = "blue";
  }
  return (value.innerHTML = count += 1);
}

function subtract() {
  if (count <= 1) {
    value.style.color = "red";
  }
  return (value.innerHTML = count -= 1);
}

//OTHER SOLUTION - we can also use a for loop to loop over the buttons. In this case w e use querySelectorAll
const btns = document.querySelectorAll("btn");
btns.array.forEach(function (element) {
  console.log(element); //logs every button
  element.addEventListener("click", function (event) {
    console.log(event.currentTarget); //logs which button was clicked & further the classList
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      //if a variable contains a specific class
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count; //whatever the button pressed, let the outcome be assigned to count
  });
});
//we use the event object in order to identify which button was clikced
