//selecting an HTML element - a getter function to get elements.
function getElement(selection) {
  const element = document.querySelector(selection);
  console.log(element);
  if (element) {
    return element;
  }
  throw new Error(`Please check '${element}' selector, no such element exists`);
}
//getElement(".first-counter"); //renders the first-counter element
//getElement("#head"); //renders the h1 element

//CONSTRUCTOR function to create new elements instances that gets elements from getElement()
function Counter(element, value) {
  console.log(element, value);
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector(".reset"); //notice here we dont say document.
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  //select the count value in the html
  this.valueDOM = element.querySelector(".value");
  //assign that value to our 'value' text Content
  this.valueDOM.textContent = value; //so in our html we see 100 & 300

  //ADD EVENT LISTENERS TO OUR BUTTONS
  //First we are going to bind 'this' to the Counter & not the button
  this.increase = this.increase.bind(this); //we are binding the function increase to an object instance of 'this'. We want it this way because if we call this.increase directly without binding, 'this' will point to the button but we want it to point to the Counter
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}
//CREATE PROTOTYPE FOR COUNTER. THIS IS ADDING FUNCTIONS TO THE CONSTRUCTOR
//INCREASE PROTOTYPE
Counter.prototype.increase = function () {
  //we want to increase value
  this.value++;
  this.valueDOM.textContent = this.value; //we are updating the value DOM with the new value
  console.log(this.value); //
};

//DECREASE PROTOTYPE
Counter.prototype.decrease = function () {
  //we want to increase value
  this.value--;
  this.valueDOM.textContent = this.value; //we are updating the value DOM with the new value
  /* console.log(this.value); // */
};

//RESET PROTOTYPE
Counter.prototype.reset = function () {
  //we want to increase value
  this.value = 0;
  this.valueDOM.textContent = this.value; //we are updating the value DOM with the new value
  /* console.log(this.value); // */
};

//so every time we create a new Counter, its values will be independent of each other - One functionality for unlimited Counters
const firstElem = new Counter(getElement(".first-counter"), 100); //new instance
console.log(firstElem); //We get the Counter with parent div counter, decreaseBtn, increaseBtn, resultBtn, & value 100

const secondElem = new Counter(getElement(".second-counter"), 300);
console.log(secondElem); //this gives us the values of the div of second Elem

firstElem.increase(); //101
secondElem.decrease(); //299
firstElem.reset(); //0

/* NOTE: WE ARE HAVING A CLASS-APP FILE IN ORDER TO SHOW THAT WE CAN WRITE OOP IN DIFFERENT WAYS, ONE USING A CLASS & THE OTHER USING A CONSTRUCTOR BUT BOTH WORK */
