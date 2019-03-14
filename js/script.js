/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

Start of quotes
------------------------------------------------------------------------------*/
var quotes = [
    {
      /*individual qote will need to be pulled using a random number generator then use that value to select the quote at random */
        quote : 'Although the world is full of suffering, it is full also of the overcoming of it.',
        source : 'Helen Keller',
        citation : 'US blind & deaf educator',
        year :'1903'
    },
    {
        quote : 'Luck is the residue of design.',
        source : 'Branch Rickey',
        citation : 'US baseball administrator',
        year : '1946'
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
    },
    {
        quote : 'Two years from now, spam will be solved.',
        source : 'Bill Gates',
        citation : 'Founder of Microsoft Corporation',
        year : '2004'
    }
];
/*------------------------------------------------------------------------------
END of quotes */

//Used to test full list of quotes in console
//console.log(quotes.year);



/* The function should look like this ----  Below
function getRandomQuote() {
generate a random number between 0 and the last index in the array parameter
use the random number and box notation to grab a random item from the quotes array
return the random item
}
*/

//Start of random quote function
function getRandomQuote() {
  //create a variable to store the random number generated from 0 to the length of the quotes
  var randomNum = Math.floor( Math.random() * quotes.length );
  //grabbing a random quote using the randomNum variable
  return(quotes[randomNum]);
  //just to see if it is creating a random number use the log below
  //console.log(randomNum);
}

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote varable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

/*  Funstion should look like this ----  Below
function printQuote() {
// create a variable that calls the getRandomQuote() function
// create a variable that initiates your HTML string
// using the template in the project instructions, add the two default quote
properties, quote and source
// if there is a quote.citation property, add it the string
// if there is a quote.year property, add it the string
// close the string with the necessary closing HTML tags
// set the innnerHTML of the .quote-box to the complete HTML string
}
*/


//start of print function
function printQuote() {
  var ranQuote = getRandomQuote();
  /*to test the random quote output using the printQuote function use logs below
  ----------------------------------------------------------------------------
  */
  //console.log(ranQuote.quote);
  //console.log(ranQuote.source);
  //console.log(ranQuote.citation);
  //console.log(ranQuote.year);


  //quote string html output
  var quoteOutput = '<div class="quote-box"><p class=\"quote\">' + ranQuote.quote + '</p>';
    quoteOutput += ' <p class="source">' + ranQuote.source;

    if (ranQuote.citation != null ){
      quoteOutput += '<span class="citation"> '+ ranQuote.citation + '</span>';
    }
    if (ranQuote.year != null ){
      quoteOutput += '<span class="year"> '+ ranQuote.year + '</span>';
    }

    quoteOutput += '</p>';
    // quote source output string
    //adding the if statement to check to see if citation is null then do nothing but if NOT empety add string to quoteOutput
    document.getElementById('quote-box').innerHTML = quoteOutput;
}

  /*  Make the HTML print out this way
  <p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
  <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
  /*

}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
