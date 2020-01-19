// create random number on every page load
let secret = getRandomInt(100)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(secret);



// SUBMIT LISTENER 
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkResponse);
let num = "Heb je het juist? LET"


// RESPONSE FUNCTION

function checkResponse() {
	let guess = document.getElementById("input").value;
	console.log("guess = " + guess);

	if (guess < secret){
     console.log("Te laag");
     num = "Oeps, te laag. Voer een groter nummer in";
     console.log(num);
 }
	else if (guess > secret){
		console.log("Te hoog");
		num = "Oeps, te hoog. Voer een kleiner nummer in";
}	else {
		console.log("Juist");
		num = "Hoera! Je hebt het juiste nummer geraden! Het geheime nummer is inderdaad " + secret;
		document.getElementsByClassName("hideUntillRight")[0].style.display = "block";

	
}



document.getElementById("result").innerHTML = num;




}


