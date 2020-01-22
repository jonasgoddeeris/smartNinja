
//
//

//
// -------SUPER CALCULATOR FULL BLOWN NORMAL INTERFACE -----

// // SUBMIT LISTENER 
// let submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", calculate);


// // Click number LISTENER 
// let clickop7 = document.getElementById("7");
// clickop7.addEventListener('click', clickNumber);


// // function operation() {
// // 	let lights = document.getElementsByClassName("calbtn");
// // 	for (let i = 0; i < calbtn.length; i++) {
// //     let operator = calbtn[i].value;
// //     // console.log("makehitecounter" + i)
// // }


// // function calculate() {
// //     console.log("HELLO");
// // }

// // function clickop7() {
// //     console.log("HELLO7");
// // }



// function clickNumber() {
// 	console.log('iets');
// };



// -----JUST ADDITION------

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculation);

var num = "Je resultaat";
document.getElementById("result").innerHTML = num;

function calculation() {
	let x = Number(document.getElementById("input1").value);
	console.log("x = " + x);
	console.log(Number.isInteger(x));
	let y = Number(document.getElementById("input2").value);
	console.log("y = " + y);
	console.log(Number.isInteger(y));
	let operator = document.getElementById("inputOperator").value;
	console.log("operator = " + operator);

	if (operator === "-") {
		var num = x - y;
		console.log(num);
		document.getElementById("result").innerHTML = num;
	} else if (operator === "+") {
		var num = x + y;
		console.log(num);
		document.getElementById("result").innerHTML = num;
	} else if (operator === "/") {
		var num = x / y;
		console.log(num);
		document.getElementById("result").innerHTML = num;
	} else if (operator === "x" || operator === "*" ) {
		var num = x * y;
		console.log(num);
		document.getElementById("result").innerHTML = num;
	} else {
		var num = "Kan niet berekenen";
		console.log("kan niet berekenen");
	};



	console.log(num);
	document.getElementById("result").innerHTML = num;
};





















