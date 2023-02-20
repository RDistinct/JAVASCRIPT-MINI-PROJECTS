const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//when the page loads we want to access the menu array and populate the page with the items

//select section center
const sectionCenter = document.querySelector(".section-center");

//select button container
const btnContainer = document.querySelector(".btn-container");

//add event listener to window
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  //map over the array
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    // return `<h1>${item.title}</h1>`;//this returns the item's title.we can also return a whole HTML section based on this
    return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="item${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$ ${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
    //now we have our dynamic items lets make them into a string so that we can inject this code to html
    //since this is an array we use join() method
  });
  displayMenu = displayMenu.join(""); //join without empty quotes will show commas in the items
  //now to add the string to HTML
  sectionCenter.innerHTML = displayMenu;
  console.log(displayMenu);
  //now instead of writing all these in the callback fn, we can write it in a different
}

function displayMenuButtons() {
  //generate buttons
  //first get unique categories the best way is to use reduce
  /* const categories = menu.map(function (item) {
    return item.category;
  });
  */
  const categories = menu.reduce(
    function (values, item) {
      //values is the arr we are returning & does not include item.category -> item is the current element we are filtering
      if (!values.includes(item.category)) {
        //to check if string/array DOES NOT contain/include a specific value, use the exclamation mark before the includes method. Eg !arr.includes(item) -> if arr DOES NOT include item
        //this is same as DOES NOT INCLUDE.
        values.push(item.category); //push that value that is not included to values arr
      }
      return values;
    },
    ["all"] //the reason we are having all in the array is coz it will always be there
  ); //return an array of string all
  //console.log(categories); //logs various categories we have
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">
      ${category}
      </button>`;
    })
    .join("");
  console.log(categoryBtns);
  btnContainer.innerHTML = categoryBtns; //at first nothing will happen when clicked coz we are selecting btns before creating them dynamically 👆🏿. The sol is to select the btns once they have been created in the DOM
  //buttons
  const filterBtns = btnContainer.querySelectorAll(".filter-btn"); //you can say document or btnContainer

  //filter items according to button
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      console.log(event.currentTarget.dataset.id); //dataset are custom html attributes that enable us to store/retrieve info using JS
      const category = event.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //   console.log(menuItem.category);
        //if dataset category matches menuItem.categoty, return it
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu); //load the whole menu array
      } else {
        displayMenuItems(menuCategory); //load menu with clicked btn data id
      }
      console.log(menuCategory);
    });
  });
}
