var handleClick = function(event){
	console.log(window.event);
	var choice =  window.event.target.id;

	var number1 = document.getElementById("firstNum").value;
	var number2 = document.getElementById("secondNum").value;
	var parsedNumber1 = parseFloat(number1);
	var parsedNumber2 = parseFloat(number2);
	var answer;
	var operation;

	if (choice == "addition"){
		operation = " + ";
		answer = parsedNumber1 + parsedNumber2;
	} else if(choice == "subtraction"){
		operation = " - ";
		answer = parsedNumber1 - parsedNumber2;
	} else if(choice == "multiplication"){
		operation = " * ";
		answer = parsedNumber1 * parsedNumber2;
	} else if(choice == "division"){
		operation = " / ";
		answer = parsedNumber1 / parsedNumber2;
	}	
	var answersArea = document.getElementById("answers");

	answersArea.innerHTML = number1 + operation + number2 + " = " + answer;

}