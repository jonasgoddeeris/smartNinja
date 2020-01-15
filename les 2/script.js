// console.log("It works!");


let mainHeadings = document.getElementsByTagName("h1");

// let mainHeadings = document.getElementsByTagName("h1")[0].innerText;
let firstHeadingText = mainHeadings[0].textContent;

console.log(mainHeadings);
console.log(firstHeadingText);




let mainHeadingIdText = document.getElementById("hello");

console.log(mainHeadingIdText);



let mainHeadingClassText = document.getElementsByClassName("ninja")[0];

console.log("mainHeadingClassText  " + mainHeadingClassText);

mainHeadingClassText.innerHTML = "<i>Kakadoen</i>";

// mainHeadingClassText.style.color = "#ffdd00";

// mainHeadingClassText.style.transform = "rotate(45deg)";

mainHeadingClassText.style.animation =  "rotation 2s infinite linear";


// document.getElementsByTagName("h1")[0].innerText = "Jonas rules tha shit bpompa !";


//cmd + shift + P = packages installeren

// Wat als je dynamische Array hebt zoals dataLayer en array values van volgorde kunnen verplaatsen ????



function changeToBlue() {
    mainHeadingClassText.classList.toggle("blue-text");
    


// function changeToBlue() {
//     let mainHeadingId = document.getElementById("hello");
//     mainHeadingId.classList.add("blue-text");
// }

let blueButton = document.getElementById("change-to-blue");
blueButton.addEventListener("click", changeToBlue);