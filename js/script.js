/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Tyler Harper
******************************************/

/* Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing*/
/*Start of quotes
/* Fetching quotes from the mongoDB Realm function instead of local store
------------------------------------------------------------------------------*/
let quotes;

async function getQuotes() {
	try {
		let response = await fetch(
			'https://webhooks.mongodb-realm.com/api/client/v2.0/app/api-biujw/service/quotes/incoming_webhook/getQuotes'
		);
		return response.json();
	} catch (error) {
		console.log(error);
	}
}

getQuotes().then((data) => (quotes = data));
/*------------------------------------------------------------------------------
END of quotes */

//Used to test full list of quotes in console
//console.log(quotes.year);

//Start of random quote function
function getRandomQuote() {
	//create a variable to store the random number generated from 0 to the length of the quotes array of objects
	var randomNum = Math.floor(Math.random() * quotes.length);
	//grabbing a random quote using the randomNum variable and returning that value
	return quotes[randomNum];
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
		newColor +=
			availableLettersNumbers[
				Math.floor(Math.random() * availableLettersNumbers.length)
			];
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
	if (ranQuote.citation != undefined) {
		quoteOutput += '<span class="citation"> ' + ranQuote.citation + '</span>';
	}
	//this if statement does the same for the year string to be added to the quote output
	if (ranQuote.year != undefined) {
		quoteOutput += '<span class="year"> ' + ranQuote.year + '</span>';
	}
	//this if statement does the same for the category string to be added to the quote output but runs a for look to seperate each item in the category so it has its own box.
	if (ranQuote.category != undefined) {
		for (i = 0; i < ranQuote.category.length; i++) {
			quoteOutput += '<p class="category"> ' + ranQuote.category[i] + '</p>';
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
document
	.getElementById('loadQuote')
	.addEventListener('click', printQuote, false);
