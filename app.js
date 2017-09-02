//requires
var inquirer = require(inquirer);
var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');

// Create my objects
//BasicCard objects/flashcards
var term1 = new BasicCard(
	"a variable that contains a list", "array");

var term2 = new BasicCard(
	'it is a "holding place" where values are stored', "variable");

var term3 = new BasicCard(
	'recipe of instructions in JavaScript', 'function');

var term4 = new BasicCard(
	'an aggregation of variables and functions', 'object');

var term5 = new BasicCard(
	'variables that make up an object', 'properties');

var term6 = new BasicCard(
	'the function of a property in an object also called a member function', 'method');

var term7 = new BasicCard(
	'a predefined "schema" that can be used to create an object later', 'constructor');

var term8 = new BasicCard(
	'performs a function on one or more operands or variables', 'operator');

var term9 = new BasicCard(
	'an html attribute that assign a JS function when an event happens', 'event handler');

var term10 = new BasicCard(
	'lines in the code that are usually there to describe what the code is doing', 'comments');


//we have to create a recursion so I am creating a variable named count to track the loops
var count = 0;

//now the recursion to cycle through the flashcards
var showFront = function(){
	if(count < 2){
		//write prompts to ask questions to cycle through cards
		inquirer.prompt([{
			type: 'input',
			name: "`front",
			// message: BasicCard.show();
	
		}]);
	};
};

BasicCard();