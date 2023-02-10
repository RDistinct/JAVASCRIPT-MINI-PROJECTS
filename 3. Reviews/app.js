console.log();
/* local reviews data assuming we are getting users from an api(ajax request).Here is an array of object items */
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set up value which reps first obj in array
let currentItem = 0; //by changing this value we get different item properties

//load the first item(initial)
window.addEventListener("DOMContentLoaded", function (params) {
  console.log("DOM is loaded");

  /* const item = reviews[currentItem]; //the reason to assign reviews[] is coz its easy
  img.src = item.img; // assign item.img to image source
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text; */
  //we can set up a function to show us all these based on button click
  showPerson(currentItem);
  //showPerson() when you use reviews[currentItem]
});
/* we are using DOMContentLoaded coz we always want to load the 1st item when the DOM loads. And we are listening on the window object. Question is, why use DOMContentLoaded when we can initialize the obj direct */

//function to grab items based on button click
function showPerson(person) {
  const item = reviews[person];
  //also say item = reviews[currentItem]
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//nextBtn
nextBtn.addEventListener("click", function () {
  currentItem++; //first increase currentItem then check if its greater than revies.length
  console.log(reviews.length); //4
  if (currentItem > reviews.length - 1) {
    //currentItem cant be bigger than 4 thats why we subtract 1 last item in array. You can also say greater than or equals to
    currentItem = 0; //if currentItem is my last in the array, set currentItem to 0
  } else {
    showPerson(currentItem); //call showPerson with calculated currentItem value
    // showPerson()  when reviews[currentItem]
  }
});

//prev btn
prevBtn.addEventListener("click", function () {
  currentItem--;
  console.log(reviews.length);
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
  // showPerson() when reviews[currentItem]
});

//So when the count gets above or under array length, it starts all over again & can be seen as a loop

//CHALLENGE: GET RANDOM OBJ WHEN YOU PRESS SUPRISE SUPRISE BTN
randomBtn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * reviews.length);
  showPerson(randomNum);
  console.log(randomNum);
});
