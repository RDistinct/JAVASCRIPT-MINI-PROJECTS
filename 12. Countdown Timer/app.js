/* ==> Goal of this project is to demo the use of Date() object 
    ==> to get the remainder time we use miliseconds*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//select giveaway, deadline,
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4"); //grab the parent div(deadline-format class) & every child div (h4)css selector in it.
//console.log(items); //NodeList [h4.days, h4.hours, h4.mins, h4.secs]

//check current date & add 10 days to it
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
console.log(tempYear, tempMonth, tempDay);
//Date
//let futureDate = new Date(2023, 2, 5, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate); //
//console.log(futureDate);
//months are 0 index based
//clock is 0-24 (24hr based)

//get year
const year = futureDate.getFullYear();
//get hours
const hours = futureDate.getHours();
//get minutes
const minutes = futureDate.getMinutes();

//get month
let month = futureDate.getMonth(); //using the month number to get month from array
month = months[month];
//console.log(month); //2 -> March
//get date
const date = futureDate.getDate();

//get day
const weekday = weekdays[futureDate.getDay()];
//.getDay() returns an index-based number

//console.log(weekday); //0
//inject year into html
giveaway.textContent = `giveaway ends in ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();
//console.log(futureTime); //a large number of milixeconds remaining to futureDate

function getRemainingTime() {
  const today = new Date().getTime();
  //console.log(today); //current time
  const t = futureTime - today;
  //console.log(t);
  /*1s = 1000ms
  1min = 60s
  1hr = 60min     
  1day = 24hr  
 */
  //convert values to ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000; //3600000
  const oneMinute = 60 * 1000;

  //calculate all the values in relation to t
  let days = t / oneDay; //a number with decimals
  days = Math.floor(days); //re-assigning days to days after flooring the value
  let hours = Math.floor((t % oneDay) / oneHour); //get remainder of oneDay & divide it by oneHour
  //console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //now that we have values, set these values to an arr so that we can iterate over them
  const values = [days, hours, minutes, seconds];

  function addZero(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    //we can also access the index of each selected item in forEach
    item.innerHTML = addZero(values[index]);
  });
  //we are iterating over the items & injecting values[index] to each item
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Giveaway hasa expired</h4>`;
    //this means that our future time should be in the future otherwise clearInterval will be executed
  }
}

//countdown
let countdown = setInterval(getRemainingTime, (interval = 1000));
getRemainingTime(); //we are invoking the getRemaininTime function after setInterval so that we have control over the getRemainingTime function
//storing setInterval to a variable so that we can use it in clearInterval
