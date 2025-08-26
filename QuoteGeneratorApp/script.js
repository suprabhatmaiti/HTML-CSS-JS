const quoteContainer=document.getElementById('quoteContainer');
const newQuoteBtn=document.getElementById('newQuoteBtn');
const copyQuoteBtn=document.getElementById('copyQuoteBtn');

let quote = '';
let author = '';
let genre =[];

newQuoteBtn.addEventListener('click',async ()=>{
    const data=await getData();
    // console.log(data);
    render(data);
})

copyQuoteBtn.addEventListener('click',()=>{
    navigator?.clipboard?.writeText?.(`${quote} --${author}`).then(()=>{
        copyQuoteBtn.innerText='Copied!'
        setTimeout(()=>{
            copyQuoteBtn.innerText='Copy Quote';
        },1000)
    }).catch((err)=>{
        console.log(err);
    });
})

async function getData(){
    try{
        const response=await fetch('https://thequoteshub.com/api/random-quote');
        if(!response.ok){
            throw new Error("HTTP Error" + response.status);
        }
        var data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
    
}

function render(data){
    quoteContainer.innerText='';
    quote = data.text;
    author = data.author;
    genre = data.tags

    const quoteDiv=document.createElement('div');
    const quotePara=document.createElement('p');
    quotePara.innerText=quote;
    quoteDiv.appendChild(quotePara);
    quoteDiv.classList.add('quoteDiv')
    
    const authorDiv = document.createElement('div');
    authorDiv.innerText=`--${author}`;
    authorDiv.classList.add('authorDiv')
    
    const genreDiv=document.createElement('div');
    genreDiv.classList.add('genres');
    genre.forEach(genre => {
        const span=document.createElement('span');
        span.innerText=genre;
        genreDiv.appendChild(span);
    });

    quoteContainer.appendChild(quoteDiv);
    quoteContainer.appendChild(authorDiv);
    quoteContainer.appendChild(genreDiv)

}