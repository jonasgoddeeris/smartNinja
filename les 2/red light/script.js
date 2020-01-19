
let redLight = document.getElementById("red");
let orangeLight = document.getElementById("orange");
let greenLight = document.getElementById("green");


redLight.addEventListener("mouseover", makeRed);
redLight.addEventListener("mouseout", makeWhite);
orangeLight.addEventListener("mouseover", makeOrange);
orangeLight.addEventListener("mouseout", makeWhite);
greenLight.addEventListener("mouseover", makeGreen);
greenLight.addEventListener("mouseout", makeWhite);




function makeRed() {
	// console.log("mouseover red");
	redLight.style.backgroundColor = "red";
};

function makeOrange() {
	// console.log("mouseover orange");
	orangeLight.style.backgroundColor = "orange";
};


function makeGreen() {
	// console.log("mouseover orange");
	greenLight.style.backgroundColor = "green";
};


function makeWhite() {
	let lights = document.getElementsByClassName("light");
	for (let i = 0; i < lights.length; i++) {
    lights[i].style.backgroundColor = "white";
    // console.log("makehitecounter" + i)
}
	// console.log("makehite")
};