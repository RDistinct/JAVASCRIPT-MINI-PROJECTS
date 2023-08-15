//select the toggle button, add a click event listener
//select articles section
const toggleBtn = document.querySelector('.btn');

const articleContainer = document.querySelector('.articles')

toggleBtn.addEventListener('click',()=>{
    console.log('Hello');
    document.documentElement.classList.toggle('dark-theme');//returns the HTML root element <html>
})

console.log(articles);

const articlesData = articles.map((article)=>{
    // console.log(moment);
    
    console.log(article );
    //destructure title date length & snippet
    const {title, date, length, snippet} = article
    const formatDate = moment(date).format('MMMM Do, YYYY') 
    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
        <span>${formatDate}</span>
        <span>${length}</span>
    </div>
    <p>${snippet}</p>
</article>`
}).join(' ')
// console.log(articlesData);

articleContainer.innerHTML = articlesData

// console.log(moment);