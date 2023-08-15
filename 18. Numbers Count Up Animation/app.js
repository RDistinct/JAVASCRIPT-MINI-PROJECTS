//Logic
//select all spans with class number
//iterate over them and log each span
//create an update function that accepts element as argument
//invoke and pass each span element in the function
//the way to increase the numbers gradually is to use a setTimeout and call it after every millisecond. That way, the numbers appear to increase like they are being added up. 

//const spans = document.querySelectorAll('.number')
//console.log(spans);//NodeList

//CREATE ARRAY USING ARRAY FROM
// const newSpans = Array.from(spans);
// console.log(newSpans);

//CREATE ARRAY USING SPREAD
/* const newSpans = [...spans] 
console.log(newSpans); */

// newSpans.map((item)=>console.log(item))

//ONE LINER
const items = [...document.querySelectorAll('.number')]
// console.log(items);


const updateCount = (element)=>{
    // console.log(element);
    // console.log(element.dataset.value);

    //convert dataset value to integer 
    const value = parseInt(element.dataset.value)
    // console.log(value);

    //how much we will increment value
    const increment = Math.ceil(value / 1000);
    // const increment = 1000;
    // console.log(increment);

    //we are going to add increment to initialValue in each iteration
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        // console.log('countdown started');
        initialValue = initialValue + increment;
        //check if value is > initialValue
    if(initialValue > value){
        element.textContent = `${initialValue}+`
        //clear the timeout
        clearInterval(increaseCount);
        return;//stop the callback from executing further
    }

    //The reason we are assigning setInterval to increaseCount variable is because setInterval returns an id then we can use clearInterval(setIntervalReturnedId) which is increaseCount in this case.Check https://www.w3schools.com/jsref/met_win_setinterval.asp
    
    

    //display element
    element.textContent = `${initialValue}+`
    }, 1);

    // console.log(increaseCount);

    
    
    //display element
    element.textContent = `${initialValue}+`
    /* console.log(element.textContent = `${initialValue}+`); */
    
}

items.forEach((item) => {    
    updateCount(item);
    // console.log(item)
})

