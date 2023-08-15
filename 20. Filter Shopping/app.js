console.log('Im here app');
console.log(products);

//import products
//make a copy and assign to new varable
//select .products-container
//setup function to displayProducts,- iterate them and display them

//SEARCH FUNCTIONALITY
//select form input
//listen for keyup event
//filter based on input value
//call displayProducts

//BUTTONS FUNCTIONALITY
//create a function to displayButtons
//get unique companies using Set()
//

//FILTER BASED ON COMPANY
//add event listener to company
//listen for the event.target
//if it contains .company-btn 
//if it is all then call displayProducts on all



//copy original products with spread operator, & why we used let 
//used let because we are overriding it in the keyup event listener
//every time you do a filtering, you will need to go back to original. so we are filtering the copied values and when we want to go back to full products, we use the original array eg when the search is empty
let filteredProducts = [...products]

//select product container
const productsContainer = document.querySelector('.products-container')

const displayProducts = ()=>{
if(filteredProducts.length < 1){
    //this means that if our array's length is less than one,show this message
    productsContainer.innerHTML = `<h6>No matches found</h6>`
    return;//means JS will not continue with execution. If you dont use return, it will show blank item
}

    productsContainer.innerHTML = filteredProducts.map(({id,title,image,price})=>{
        // console.log(product);
        return `<article class="product" data-id="${id}">
        <img src="${image}" alt="" class="product-img img">
        <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
        </footer>
    </article>`
    }).join('')
}

displayProducts()

//TEXT FILTER
//select input 
//displayedProduct relies on filteredProduct
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', ()=>{
    const inputValue = searchInput.value
    // console.log(inputValue);
    //here we use the original products array
    filteredProducts = products.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue)
        //we are setting the filteredProduct to have the text from search using includes 
    });
    //call displayProducts
    displayProducts();
})

//filter buttons
const companiesDOM = document.querySelector('.companies')

const displayButtons = ()=>{
    const buttons = ['all',...new Set(products.map((product)=>
        product.company
    ))]

    companiesDOM.innerHTML = buttons.map((company)=>{
        return`<button class="company-btn" data-id="${company}">${company}</button>`
    }).join('')
}
displayButtons();//['all','ikea','marcos','caressa','liddy']

companiesDOM.addEventListener('click',(event)=>{
    console.log(event.target);
    const element = event.target;
    if (element.classList.contains('company-btn')){
        if(element.dataset.id === 'all'){
            filteredProducts = [...products]
        }else{
            filteredProducts = products.filter((product)=>{
                return product.company === element.dataset.id
            })
        }
        searchInput.value = ''
        displayProducts();
    }
})