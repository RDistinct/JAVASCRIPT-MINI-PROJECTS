const url = 'https://icanhazdadjoke.com/'

const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

// console.log(btn, result);
btn.addEventListener('click', ()=>{
    // console.log('Hello');
    //invoke fetchDadJoke
    fetchDadJoke();
})

//fetch functionality
const fetchDadJoke = async () =>{
    //show loading b4 the joke is fetched
    result.textContent = 'Loading...'

    //error handling
    try {
        const response = await fetch(url,{
            headers:{
                Accept:'application/json',
                'User-Agent':'learning app',
            }
        })
        // console.log(response);
        //handle response error
        if(!response.ok){
            throw new Error('There was an error');
        }

        const data = await response.json();
        // console.log(data);
        
        //set result to joke content
        result.textContent = data.joke
    } catch (error) {
        result.textContent = `There is an error`
        
    }

    
}

//show a joke every time we start our app
fetchDadJoke()