function playGame() {

var inputBet = Number(document.getElementById("inputBetHere").value); //value of input described by ID or class or tag'
var currentMoney = inputBet;
var rollCounter = 0;
var maxAmountWon = currentMoney;
var rollsAtMaxAmountWon = 0;


if (inputBet <= 0){
	alert("Error: please enter a value greater than zero.");
}
else {
	while (currentMoney > 0) {
		rollCounter++;

		var dieOne = Math.floor(Math.random() * 6 + 1); 
		var dieTwo = Math.floor(Math.random() * 6 + 1);
		var diceSum = dieTwo + dieOne;
		
		if (diceSum != 7) {
			console.log("lost");
			currentMoney--;
			console.log(currentMoney)
		}
		else {
			console.log("winner");
			currentMoney = currentMoney + 4;
			console.log(currentMoney);
			
			if (maxAmountWon < currentMoney){
				maxAmountWon = currentMoney;
				rollsAtMaxAmountWon = rollCounter;
			}

		}	

	}
	console.log(maxAmountWon);
	console.log(rollsAtMaxAmountWon);
	console.log(rollCounter);
	document.getElementById("outputInputBet").innerText = ("$" + inputBet.toFixed(2));
	document.getElementById("outputRollCounter").innerText = rollCounter;
	document.getElementById("outputMaxAmountWon").innerText = ("$" + maxAmountWon.toFixed(2));
	document.getElementById("outputRollsAtMaxAmountWon").innerText = rollsAtMaxAmountWon;
	document.getElementById("results").style.display = ""
}
}
