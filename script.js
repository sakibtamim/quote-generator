/*
// local quotes 
//Show new Quotes
function newQuotes() {
    //Pick a random quote 
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}


newQuotes();
*/




// Api quotes 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//show loading
function showLoading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function hideLoading() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


//show new quote
function newQuote() {
    showLoading();
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //cehck if author field is black and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    //check qoute length to determine styling
    if (quote.quote.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // set quote, hide loader
    //authorText.textContent = quote.author;
    quoteText.textContent = quote.quote;
    hideLoading();
}


// Get Quotes From API
async function getQuotes() {
    showLoading();
    //const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
    const apiUrl = 'https://random-quotes-freeapi.vercel.app/api/quotes';
    //const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        //{
        // headers: {
        //'X-Api-Key': 'oYbmJipEF8P7Q13AcrY+oQ==eHQqXJ6d5rshEXKL'
        // }
        //}
        //);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
        //Catch error here
    }
}


//share with friends in facebook
function facebookQuote() {
    //const facebookUrl = `https://www.facebook.com/dialog/share?text=${quoteText.textContent} - ${authorText.textContent}`;
    const facebookUrl = `https://www.facebook.com/dialog/feed?app_id=145634995501895&display=popup&link=https://www.facebook.com/`;
    window.open(facebookUrl, '_blank');
}

//event listeners
newQuoteBtn.addEventListener('click', newQuote);
facebookBtn.addEventListener('click', facebookQuote);

//On LOAD
getQuotes();

