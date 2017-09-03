//use inquirer
var inquirer = require("inquirer");

//create the constructor
//pass the parameters front and back
function BasicCard(front, back){
	this.front = front;
	this.back = back;
};

module.exports = BasicCard;

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

// Creating a recursion
var count = 0;
var score = 0;

var showFront = function(){
	if(count<10){

		inquirer.prompt(
			//ask the question on the front of the card
			{
				name: "card1",
				message: term1.front
			}
			).then(function(card1){
				//store input in a variable to be compared to back of card later
				// need helps with this. I haven't figured out how to save the userinput in a variable
				//to be compared to the back of the card.

				if (card1 === term1.back) {
					console.log("correct");
					score++;
					console.log("Score: " + score);
					showFront();
				}else{
					console.log("Incorrect" + "\nThe correct answer is... " + term1.back);
					console.log("Score: " + score);
				}
			});
	}else{
		console.log("All done");
		console.log("Final Score: " + score);
	};
};

showFront();