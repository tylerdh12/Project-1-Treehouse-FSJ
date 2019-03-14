/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
    {
        quote : 'Although the world is full of suffering, it is full also of the overcoming of it.',
        source : 'Helen Keller',
        citation : 'US blind & deaf educator',
        year : '1880 - 1968'
    },
    {
        quote : 'Luck is the residue of design.',
        source : 'Branch Rickey',
        citation : 'US baseball administrator',
        year : '1881 - 1965'
    },
    {
        quote : 'My theory of evolution is that Darwin was adopted.',
        source : 'Steven Wright',
        citation : 'US comedian and actor',
        year : '1955'
    },
    {
        quote : 'It\'s always been about the experience of life and of not being passive. If something so excites my curiosty, I want to go there, be a part of whatever it is that\'s either pushing me or pulling me toward it. That desire for experience has made me very rich in life experience.',
        source : 'Tish Grier',
        citation : 'love and hope and sex and dreams',
        year : '2006'
    },
    {
        quote : 'The greatest obstacle to discovery is not ignorance - it is the illusion of knowledge.',
        source : 'Daniel J. Boorstin',
        citation : 'US historian',
        year : '1914'
    },
    {
        quote : 'We should conduct ourselves not as if we ought to live for the body, but as if we could not live without it.',
        source : 'Seneca',
        citation : 'Roman dramatist, philosopher, & politician',
        year : '5 BC - 65 AD'
    }
];

//Used to test quotes in console
//console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

//create a variable to store the random number generated from 0 to the length of the quotes (0-5)

//Start of random quote function
function getRandomQuote() {
  var randomNum = Math.floor( Math.random() * quotes.length );
  //compare randomNum with quotes to pull random quote
  return(quotes[randomNum]);
  console.log(randomNum);
}

getRandomQuote();
/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
var randomQuote = getRandomQuote();
function printQuote(getRandomQuote) {

}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
