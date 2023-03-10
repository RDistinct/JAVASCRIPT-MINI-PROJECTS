//MODAL POP PROJECT
/*
==> this project demonstrates using JS to add/remove css classes 
 */
// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
// listen for click events on modal-btn and close-btn

modalBtn.addEventListener("click", function () {
  //console.log(modalBtn.classList);
  modalOverlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
