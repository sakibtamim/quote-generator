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

let apiQuotes = [];

//show new quote
function newQuote() {
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //cehck if author field is black and replace it with 'unknown'
    console.log(quote);
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    quoteText.textContent = quote.quote;
}


// Get Quotes From API
async function getQuotes() {
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

//On LOAD
getQuotes();
