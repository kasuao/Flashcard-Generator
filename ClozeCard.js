//export this file
module.export = ClozeCard;

//constructor for CLozeCard
function ClozeCard(text, cloze){
	// The text or full text
	this.text = text;
	//the portion to be hidden or deleted
	this.cloze = cloze;
	//cloze property where the a portion of the text (this.text) is deleted (that portion is defined as this.cloze and replaced with '____'). 
	this.clozeDeleted = this.text.replace(this.cloze, '______');
	//if cloze is not deleted then throw an error
	this.logError = function(error){
		if (!this.clozeDeleted) {
			console.log(error);
		};
	};
};

// Create my objects
//ClozeCard objects/flashcards
var term1 = new ClozeCard(
	"An array is a variable that contains a list", "array");

var term2 = new ClozeCard(
	'A variable is it is a "holding place" where values are stored', "variable");

var term3 = new ClozeCard(
	'A function is a recipe of instructions in JavaScript', 'function');

var term4 = new ClozeCard(
	'An object is an aggregation of variables and functions', 'object');

var term5 = new ClozeCard(
	'Properties are variables that make up an object', 'Properties');

var term6 = new ClozeCard(
	'A method is the function of a property in an object also called a member function', 'method');

var term7 = new ClozeCard(
	'A constructor is a predefined "schema" that can be used to create an object later', 'constructor');

var term8 = new ClozeCard(
	'An operator performs a function on one or more operands or variables', 'operator');

var term9 = new ClozeCard(
	'An event handler is an html attribute that assign a JS function when an event happens', 'event handler');

var term10 = new ClozeCard(
	'Comments are lines in the code that are usually there to describe what the code is doing', 'Comments');

console.log(term1);