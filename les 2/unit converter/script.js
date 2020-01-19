
// SUBMIT LISTENER 
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkResponse);
let num = "Resultaat komt hier"
document.getElementById("result").innerHTML = num;


// RESPONSE FUNCTION

function checkResponse() {
	let km = document.getElementById("input").value;
	console.log("guess = " + km);
	num = km * 0.621371192 + " Miles";
	document.getElementById("result").innerHTML = num;




}


