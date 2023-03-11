//this project demos the use of:
/* ==> listening to events
/* ==> adding/removing classes
/* ==> in the html doc we have an article with <p>, edit button and delete button. we are going to use JS to dynamically add/remove this article, with the value of our item.
/* ==> 
/* ==>
  ==> ===> => ->
 */

//select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit options
let editElement;
let editFlag = false; //default to false but when we click submit we want it to turn true
let editID = "";

//LISTEN TO EVENTS

//form submitt
form.addEventListener("submit", addItem);

//clear items
clearBtn.addEventListener("click", clearItems);

//load grocery items when the page is loaded
window.addEventListener("DOMContentLoaded", setUpItems);

//FUNCTIONS
//this function will be called when submit event is triggered
function addItem(event) {
  event.preventDefault();
  //access value of grocery & assign it to variable
  const value = grocery.value;
  //console.log(value);
  //use Date object to generate unique ID & convert it to string-> this way is a shortcut
  const id = new Date().getTime().toString();

  //we have 3 conditions
  if (value && !editFlag) {
    //means the editFlag is NOT true.By default its true that its value is false.
    //we are either getting an empty string which is false,or a value which is true.So we write the above in stead of(value !=="" && editFlag === false)
    //console.log("add item to list");
    createListItem(id, value); //this is the function that creates the items

    /* //create article element
    const element = document.createElement("article");
    //add class to our article element
    element.classList.add("grocery-item");
    //create data-id attribute
    const attr = document.createAttribute("data-id");
    //assign attr the value of id
    attr.value = id; //then add attr to our element
    element.setAttributeNode(attr);

    //add our values to element html
    element.innerHTML = `<p class="title">${value} </p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <io class="fas fa-edit"></io>
                        </button>
                        <button type="button" class="delete-btn">
                            <io class="fas fa-trash"></io>
                        </button>
                    </div>`;
    //to access the edit & Delete button, you either use Event bubbling or select them after they have been created.Eg of selecting them after they have been created
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    //append child
    list.appendChild(element);
*/
    //display the alert
    displayAlert("item added to the list", "success");

    //show our container
    container.classList.add("show-container");

    //add to local storage
    addToLocalStorage(id, value);

    //delete item
    /* function deleteItem(event) {
      console.log("Item deleted");
      // console.log(event.currentTarget);
      //console.log(event.currentTarget.parentElement);
      // console.log(event.currentTarget.parentElement.parentElement);
      //we are using event bubbling & delegation to get to grand parent of button. Then remove the child of list.currentTarget coz the button is specific.
      const element = event.currentTarget.parentElement.parentElement; //currentTarget is button,1st parentElem is btn-container, 2nd parentElem is article.This code gets the grandparent of currentTarget for an event.In short we get the article.

      //get the id of item so we can use it in removeFromLocalStorage
      const id = element.dataset.id;
      // console.log(element); // article which contains item & buttons
      list.removeChild(element); //tell list to remove child with element property we are targeting(using current target). this removes the article form grocery-list. list is grocery-container.
      // Since list is the parent of article, we are telling list to remove article element with the currentTarget.

      //check if list is empty & remove show container message
      if (list.children.length === 0) {
        container.classList.remove("show-container");
      }

      //display message of item removed
      displayAlert("item removed successfully", "danger");

      //set default
      setBackToDefault();

      //remove from local storage
      removeFromLocalStorage(id);
    } */

    //edit item
    /* function editItem(event) {
      console.log("item edited");
      //first target the grocery item just as in delete function
      const element = event.currentTarget.parentElement.parentElement;
      //set editElement
      editElement = event.currentTarget.parentElement.previousElementSibling; //this is the <p> with class title
      //set form value
      grocery.value = editElement.innerHTML; //this will give us what is in the input field
      //in short we are assigning same value to the input just like the one we assigned when creating an item.Eg if you create eggs item & add it to the grocery, when you click the edit button of eggs, input value will be eggs
      //set editFlag to true & get the dataset
      editFlag = true;
      editID = element.dataset.id;
      //change submit button to edit
      submitBtn.textContent = "edit";
    } */

    //set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    //instead of (value !== "" && editFlag === true)
    console.log("Editing");
    //we want to assign the new value to the item
    editElement.innerHTML = value; //this is the new changed value. First we assigned it to innerHTML & now we get it back
    displayAlert("value changed", "success");
    //edit local storage to update the value
    editLocalStorege(editID, value); //local storage is before setBackToDefault

    setBackToDefault(); //this will reset grocery.value, editFlag, editID, & submitBtn
  } else {
    console.log("empty values");
    displayAlert("Please enter value", "danger");
  }
}

function deleteItem(event) {
  console.log("Item deleted");
  // console.log(event.currentTarget);
  //console.log(event.currentTarget.parentElement);
  // console.log(event.currentTarget.parentElement.parentElement);
  //we are using event bubbling & delegation to get to grand parent of button. Then remove the child of list.currentTarget coz the button is specific.
  const element = event.currentTarget.parentElement.parentElement; //currentTarget is button,1st parentElem is btn-container, 2nd parentElem is article.This code gets the grandparent of currentTarget for an event.In short we get the article.

  //get the id of item so we can use it in removeFromLocalStorage
  const id = element.dataset.id;
  // console.log(element); // article which contains item & buttons
  list.removeChild(element); //tell list to remove child with element property we are targeting(using current target). this removes the article form grocery-list. list is grocery-container.
  // Since list is the parent of article, we are telling list to remove article element with the currentTarget.

  //check if list is empty & remove show container message
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  //display message of item removed
  displayAlert("item removed successfully", "danger");

  //set default
  setBackToDefault();

  //remove from local storage
  removeFromLocalStorage(id);
}

function editItem(event) {
  console.log("item edited");
  //first target the grocery item just as in delete function
  const element = event.currentTarget.parentElement.parentElement;
  //set editElement
  editElement = event.currentTarget.parentElement.previousElementSibling; //this is the <p> with class title
  //set form value
  grocery.value = editElement.innerHTML; //this will give us what is in the input field
  //in short we are assigning same value to the input just like the one we assigned when creating an item.Eg if you create eggs item & add it to the grocery, when you click the edit button of eggs, input value will be eggs
  //set editFlag to true & get the dataset
  editFlag = true;
  editID = element.dataset.id;
  //change submit button to edit
  submitBtn.textContent = "edit";
}

//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`); //add class alert-danger or alert-success

  //remove alert after 1 second
  setTimeout(() => {
    alert.textContent = ""; //removes text
    alert.classList.remove(`alert-${action}`); //removes class
  }, 1000);
}
//clear items
function clearItems() {
  //select all grocery items
  const items = document.querySelectorAll(".grocery-item");
  //if items have a node list greater than 0 then clear
  if (items.lenght > 0) {
    //this means that there is an item in the node list
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }

  //also remove the "Remove item button after clearing the items"
  container.classList.remove("show-container");
  //display alert that we have cleared the item
  displayAlert("empty list", "danger");
  //add setBackToDefault coz of edit item
  setBackToDefault();
  //when we remove the items, we also want to remove them from the localStorage
  // localStorage.removeItem("list");
}
// set to default function
function setBackToDefault() {
  //this is to clear the input field of the grocery
  grocery.value = ""; //set it to empty string

  //these are coz we will call this function later & we will need them
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
  console.log("set back to default");
}

// ***LOCAL STORAGE FUNCTIONS ***
function getLocalStorage() {
  // console.log("accessed the localStorage");
  // console.log(JSON.parse(localStorage.getItem("list"))); //accesses the L.S. list
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : []; //initially there is no item in the local storage
}

//add to local storage
function addToLocalStorage(id, value) {
  console.log("Added to local storage");
  const grocery = { id: id, value: value }; //we are creating an object of grocery with same value of id and value. id = id, value = value
  console.log(grocery); //{"id": "1678445521621","value": "eggs"}
  //if local storage there is an item, get that item else set up an empty array
  let items = getLocalStorage();
  items.push(grocery); //if items is null, push grocery
  console.log(items); //the first time will be null coz there is no item in local storage but the 2nd time it will have 2 items coz we have set them using the below line of code👇🏿
  localStorage.setItem("list", JSON.stringify(items));
}

//edit local storage
function editLocalStorege(id, value) {
  let items = getLocalStorage();
  //map over items in localStorage
  items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

//remove from local storage
function removeFromLocalStorage(id) {
  //the id we have is from delete item function - line 94
  let items = getLocalStorage();

  //filter items that dont match the id
  items = items.filter(function (item) {
    console.log(items);
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
  // console.log(items);
}

/*NOTE: every value in JS is truthy or falsy. 
      ==> Example of falsy values in JS: false, 0, -0, 0n,"",null, undefined,NaN
      ==> Example of truthy values in JS: boolean value true,Non-empty strings(like "false"),non-zero numbers(1 & above,Infinity),objects, functions, dates etc,
      ==> In short if a value is not explicitly false, its truthy 
      ==> 
      
*/
//  ***LOAD ITEMS***
function setUpItems() {
  console.log("listening for dom loading");
  //get items from local storage
  let items = getLocalStorage(); //this is an object of items from local storage
  console.log(items);

  if (items.length > 0) {
    //BUG: If i write if(items)... it works but if i write if(items.length > 0)... it doesnt work. WHY!!???
    items.forEach(function (item) {
      createListItem(item.id, item.value);
      console.log("items are many");
    });
    container.classList.add("show-container");
  } else {
    console.log("items not found");
  }
}

function createListItem(id, value) {
  //create article element
  const element = document.createElement("article");
  //add class to our article element
  element.classList.add("grocery-item");
  //create data-id attribute
  const attr = document.createAttribute("data-id");
  //assign attr the value of id
  attr.value = id; //then add attr to our element
  element.setAttributeNode(attr);

  //add our values to element html
  element.innerHTML = `<p class="title">${value} </p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <io class="fas fa-edit"></io>
                        </button>
                        <button type="button" class="delete-btn">
                            <io class="fas fa-trash"></io>
                        </button>
                    </div>`;
  //to access the edit & Delete button, you either use Event bubbling or select them after they have been created.Eg of selecting them after they have been created
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  //append child
  list.appendChild(element);
}
