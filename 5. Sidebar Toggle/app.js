/* This project shows how to hide sidebar using JavaScript to manipulate tranform style
==>In the css we have a show sidebar class that when activated it shows the sidebar but if its inactive, the default is that the navbar is not shown */

//select sidebar toggle, the sidebar & close button
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

//listen to click events in my toggleBtn
toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  //check if sidebar has class of show-sidebar
  /*
  if (sidebar.classList.contains("show-sidebar")) {
    //remove sidebar if its present
    sidebar.classList.remove("show-sidebar");
} else {
    sidebar.classList.add("show-sidebar");
} */

  //a short  way is using toggle
  sidebar.classList.toggle("show-sidebar");
});

//closeBtn
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar"); //this button only needs to close the aside bar
});
