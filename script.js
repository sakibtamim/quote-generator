/* local quotes */
//Show new Quotes
function newQuotes() {
    //Pick a random quote 
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}


newQuotes();





/* Api quotes */
/*
let apiQuotes = []

// Get Quotes From API
async function getQuotes() {
    //const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
    const apiUrl = 'https://dummyjson.com/quotes/random';
    //const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl
            //{
            // headers: {
            //'X-Api-Key': 'oYbmJipEF8P7Q13AcrY+oQ==eHQqXJ6d5rshEXKL'
            // }
            //}
        );
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        console.log(error);
        //Catch error here
    }
}

//On LOAD
getQuotes();
*/