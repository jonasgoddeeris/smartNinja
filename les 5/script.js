// console.log("It works!");

d3.select("body").style("background-color", "lightgrey");






let mainHeadings = document.getElementsByTagName("h1");

// let mainHeadings = document.getElementsByTagName("h1")[0].innerText;
let firstHeadingText = mainHeadings[0].textContent;

console.log(mainHeadings);
console.log(firstHeadingText);




let mainHeadingIdText = document.getElementById("hello");

console.log(mainHeadingIdText);



let mainHeadingClassText = document.getElementsByClassName("ninja")[0];

console.log("mainHeadingClassText  " + mainHeadingClassText);

// mainHeadingClassText.innerHTML = "<i>Kakadoen</i>";

// mainHeadingClassText.style.color = "#ffdd00";

// mainHeadingClassText.style.transform = "rotate(45deg)";

// mainHeadingClassText.style.animation =  "rotation 2s infinite linear";


document.getElementsByTagName("h1")[0].innerText = "Ninjas rules tha shit bpompa !";


//cmd + shift + P = packages installeren

// Wat als je dynamische Array hebt zoals dataLayer en array values van volgorde kunnen verplaatsen ????


function changeToBlue() {
	let mainHeadingId = document.getElementById("hello");
    mainHeadingId.classList.toggle("blue-text");
};
    
function changeBallToBlue() {
	let ball = document.getElementById("ballBlue");
    ball.style.fill ="blue";
    console.log("blueballfunction")
};


// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

// // import {MDCTextField} from '@material/textfield';

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

// // function changeToBlue() {
//     let mainHeadingId = document.getElementById("hello");
//     mainHeadingId.classList.add("blue-text");
// }

// let blueButton = document.getElementById("change-to-blue");
// blueButton.addEventListener("click", changeToBlue);

let blueBallButton = document.getElementById("change-ball-to-blue");
blueBallButton.addEventListener("click", changeBallToBlue);

mainHeadingIdText.addEventListener("mouseover", rotate5);
mainHeadingIdText.addEventListener("mouseout", rotateMin5);


function rotate5() {
	console.log("mouseover");
	mainHeadingIdText.style.transform = "rotate(5deg)";
	// alert("why you break this shit man !");
};

function rotateMin5() {
	console.log("mouseout")
	mainHeadingIdText.style.transform = "rotate(-5deg)";
	// alert("wWHHHHY???!");
};


d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });



