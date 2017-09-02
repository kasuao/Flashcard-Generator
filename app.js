//requires
var inquirer = require(inquirer);
var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');

 

//we have to create a recursion so I am creating a variable named count to track the loops
var count = 0;
userInput = "";

//now the recursion to cycle through the flashcards
var showCard = function(){
	if(count < 1){
		//write prompts to ask questions to cycle through cards
		inquirer.prompt({
			type: 'input',
			name: "`front",
			//for this message I want it to show the BasicCard term[i].front
			message: term1.front;
	
		}).then(function(answers){
			//I am trying to have it compare the user input with what is on term[i].back
			if (userInput === term1.back) {
				console.log("That's correct!");
			}else{
				console.log("That is incorrect.");
			};
			count++;
			showCard();
		});
	};
};

showCard();