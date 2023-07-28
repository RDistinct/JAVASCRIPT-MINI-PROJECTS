//we have a grid of images
//we have nature pictures and city ones.
//once you click on nature ones, you get a modal/gallery with the picture you have clicked, together with other nature pictures.
//the gallery has navigation buttons for left/right movement.
//you can click each individual item & you will set it as a main image
//you can close the modal

//SELECT IMAGE ELEMENTS
const image = document.querySelector('.section');

image.addEventListener('click',(e)=>{
    const value = e.target;
    console.log(value)
    //if target contains img, open modal
    if(e.target.classList.contains('img')){
        console.log('Image clicked');
        
        //open modal with current image clicked
        const child = document.createElement('div')
         document.querySelector('.modal').classList.add('open').appendChild(child);
        // addContent(value)
    }
})

/* function addContent(param){
     return `<img src="${param.src}" alt="${param.alt}" title="${param.title}" class="main-img"> <div class="modal-images"> <img src="" alt="" title="" class="" data-id=""> </div>`
} */