class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset"); //notice here we dont say document.
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    //select the count value in the html
    this.valueDOM = element.querySelector(".value");
    //assign that value to our 'value' text Content
    this.valueDOM.textContent = value; //so in our html we see 100 & 300
    this.increase = this.increase.bind(this); //we are binding the function increase to an object instance of 'this'. We want it this way because if we call this.increase directly without binding, 'this' will point to the button but we want it to point to the Counter
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value; //we are updating the value DOM with the new value
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value; //we are updating the value DOM with the new value
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

function getElement(selection) {
  const element = document.querySelector(selection);
  console.log(element);
  if (element) {
    return element;
  }
  throw new Error(`Please check '${element}' selector, no such element exists`);
}

const firstElem = new Counter(getElement(".first-counter"), 100);
const secondElem = new Counter(getElement(".second-counter"), 300);
