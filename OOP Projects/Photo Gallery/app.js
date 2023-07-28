//function to get an element

function getElement(selection) {
  const element = document.querySelector(selection);
  console.log(element);
  if (element) {
    // console.log(element);
    return element;
  } else {
    throw new Error(`Please make sure ${selection} exists`);
  }
}

//CONSTRUCTOR FUNCTION
//We want to pass either city or nature
function Gallery(element) {
  this.container = element; //whatever element  we passed when creating new object
  //console.log(element); //section.nature.section OR section.city.section. this is an object
  //pass in section of nature or city into gallery
  //console.log(element);
  //select all images
  //this.list = element.querySelectorAll(".img");
  //console.log(this.list); //we get a node list of images but we want an array of images. So we can copy the node list via spread operator, inside an array.
  this.list = [...element.querySelectorAll(".img")];
  //console.log(this.list); //now we are getting an array of images [img.img, img.img, img.img]

  //target modal using getElement - reusing the getElement function
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.imageName = getElement(".image-name")
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");
  //BIND MODAL BUTTONS TO THE GALLERY
  
  this.closeModal = this.closeModal.bind(this)
  this.nextImage = this.nextImage.bind(this)
  this.prevImage = this.prevImage.bind(this)



  //binding the openModal to Gallery instead of section(city or nature).This is coz when listening to click, we want to access gallery.Left of the dot is container(gallery) that we are supposed to listen to.In the gallery we have the modal which we want to open
  // this.openModal = this.openModal.bind(this); //Gallery{...} this is what we want for the openModal prototype
  this.container.addEventListener(
    "click",
    function (e) {
      if(e.target.classList.contains('img')){
        this.openModal(e.target, this.list);
      }
      console.log(selectedImage,list);
    }.bind(this)
  ); //before it was binding to ... but now we are binding it to our callback function. 
  //by default 'this' was pointing to the container before binding it to Gallery.
}

Gallery.prototype.openModal = function (selectedImage,list) {
  //console.log(this);//points to gallery
  //console.log("Open modal");
  //we want to add this class when this function runs
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list.map(function(image){
    return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id?"modal-img selected":"modal-img"}"/>`
  }).join('') 
  this.modal.classList.add("open");
};

Gallery.prototype.setMainImage = function(selectedImage){
  this.modalImg.src = selectedImage.src
  this.imageName.textContent = selectedImage.title
} 

//CONTROL MODAL
Gallery.prototype.closeModal = function(){
  this.modal.classList.remove('open')
  //remove the event listeners from buttons
  this.closeBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nextImage)
  this.prevBtn.removeEventListener('click', this.prevImage)
}

Gallery.prototype.nextImage = function(){

}

Gallery.prototype.prevImage = function(){

}


const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
