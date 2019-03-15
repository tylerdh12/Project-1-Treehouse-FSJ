/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Tyler Harper
******************************************/

/* Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing*/
/*Start of quotes
------------------------------------------------------------------------------*/

var quotes = [
    {
      /*individual qote will need to be pulled using a random number generator then use that value to select the quote at random */
        quote : 'Although the world is full of suffering, it is full also of the overcoming of it. My optimism, then, does not rest on the absence of evil, but on a glad belief in the preponderance of good and a willing effort always to cooperate with the good, that it may prevail.',
        source : 'Helen Keller',
        citation : 'US blind & deaf educator',
        year : '1903',
        category : ['Optimism', 'Hope']
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
        year : '1955',
        category : ['Funny', 'Theory']
    },
    {
        quote : 'It\'s always been about the experience of life and of not being passive. If something so excites my curiosty, I want to go there, be a part of whatever it is that\'s either pushing me or pulling me toward it. That desire for experience has made me very rich in life experience.',
        source : 'Tish Grier',
        citation : 'love and hope and sex and dreams',
        year : '2006',
        category : ['Fulfilment', 'Life', 'Passion']
    },
    {
        quote : 'The greatest obstacle to discovery is not ignorance - it is the illusion of knowledge.',
        source : 'Daniel J. Boorstin',
        citation : 'US historian',
        year : '1914',
        category : ['Wisdom']
    },
    {
        quote : 'We should conduct ourselves not as if we ought to live for the body, but as if we could not live without it.',
        source : 'Seneca',
        citation : 'Roman dramatist, philosopher, & politician',
        year : '5 BC - 65 AD',
        category : ['Health']
    },
    {
        quote : 'Two years from now, spam will be solved.',
        source : 'Bill Gates',
        year : '2004',
        category : ['Prediction']
    }
];
/*------------------------------------------------------------------------------
END of quotes */

//Used to test full list of quotes in console
//console.log(quotes.year);

//Start of random quote function
function getRandomQuote() {
  //create a variable to store the random number generated from 0 to the length of the quotes array of objects
  var randomNum = Math.floor( Math.random() * quotes.length );
  //grabbing a random quote using the randomNum variable and returning that value
  return(quotes[randomNum]);
  //just to see if it is creating a random number use the log below
  //console.log(randomNum);
}

//This function creates a random color
function getRandomColor() {
  //we first have to give the function charictors to choose to randomize so we can use a hex '#' color code
   var availableLettersNumbers = '0123456789ABCDEF';
   //now we need a variable to start with for the color place holder is # so we dont have to concat later
   var newColor = '#';
   //got to create a standard for loop that goes thro the loop 6 times to create a wider range of colors
   for (var i = 0; i < 6; i++) {
     //now the random string gets added to our original # for the hash color. Using math.
     //floor and length of availableLettersNumberss o it will go thru all the available combinations of our availableLettersNumbers variable
     newColor += availableLettersNumbers[Math.floor(Math.random() * availableLettersNumbers.length)];
   }
   //we now need to return that new color value to where it can be used externally
   return newColor;
 }

/*start of print function
------------------------------------------------------------------------------*/
function printQuote() {

  //this changes the color for the background and needs to be inside this funcrion to call it every time it asks for a new quote
  var randomColor = getRandomColor();
  //this actually alters the body style to changes the body background property of the index.HTML file
  document.body.style.background = randomColor;

  //creates a variable for the getRandomQuote function to be called and be stored
  var ranQuote = getRandomQuote();

  /*to test the random quote output using the printQuote function use logs below
  ----------------------------------------------------------------------------*/
  //console.log(ranQuote.quote);
  //console.log(ranQuote.source);
  //console.log(ranQuote.citation);
  //console.log(ranQuote.year);

  /* Quote string html output starts here
  ----------------------------------------------------------------------------*/
  //This line creates the quote string in HTML form
  var quoteOutput = '<p class="quote">' + ranQuote.quote + '</p>';
    //This line adds on or concatenates the prior output to the quotes source or author
    quoteOutput += ' <p class="source">' + ranQuote.source;
    /*before adding the citation we need to make sure the object containes the
    information. I used an if statement that checks to see if the objects value
    is empty. Then adds the citation in HTML format if it is available. */
    if (ranQuote.citation != undefined ){
      quoteOutput += '<span class="citation"> '+ ranQuote.citation + '</span>';
    }
    //this if statement does the same for the year string to be added to the quote output
    if (ranQuote.year != undefined ){
      quoteOutput += '<span class="year"> '+ ranQuote.year + '</span>';
    }
    //this if statement does the same for the category string to be added to the quote output but runs a for look to seperate each item in the category so it has its own box.
    if (ranQuote.category != undefined ){
      for (i = 0; i < ranQuote.category.length; i++){
        quoteOutput += '<p class="category"> '+ ranQuote.category[i] + '</p>';
      }
    }
    //this adds the closing paragraph tag and in this case completes the concatenation that needs to be done for our output
    quoteOutput += '</p>';
    //this line replaced the content in the quote-box div with the output string created above
    document.getElementById('quote-box').innerHTML = quoteOutput;
}

//This line allows you to set the delay for the quotes and background
setInterval(printQuote, 6000);

//this line listens for an action ' click ' on the button to reload out print quote function and reload a new random quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
