
// SUBMIT LISTENER 
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", checkResponse);



// RESPONSE FUNCTION

function checkResponse() {

	event.preventDefault();
	console.log("start");
const km = document.getElementById("input").value;
console.log(km);
var fullDate = new Date();
var dd = String(fullDate.getDate()).padStart(2, '0');
var mm = String(fullDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = fullDate.getFullYear();
var today = dd + '/' + mm + '/' + yyyy;
let page = window.location.pathname;
const data = { input: km, timeStamp: fullDate, dateOnly: today, page: page };


fetch('https://hooks.zapier.com/hooks/catch/3106303/oh0og6m/', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


}






// POGING 3 

// Variable to hold request
// var request;

// // Bind to the submit event of our form
// $("form#test-form").submit(function(event){
// 	console.log("bindstart");
//     // Prevent default posting of form - put here to work in case of errors
//     event.preventDefault();

//     // Abort any pending request
//     if (request) {
//         request.abort();
//     }
//     // setup some local variables
//     var $form = $(this);

//     // Let's select and cache all the fields
//     var $inputs = $form.find("input, select, button, textarea");

//     // Serialize the data in the form
//     var serializedData = $form.serialize();
//     console.log(serializedData);

//     // Let's disable the inputs for the duration of the Ajax request.
//     // Note: we disable elements AFTER the form data has been serialized.
//     // Disabled form elements will not be serialized.
//     $inputs.prop("disabled", true);

//     // Fire off the request to /form.php
//     request = $.ajax({
//         url: "hhttps://script.google.com/macros/s/AKfycbzEezeUgQ37fW6nofT9G1_HuBC_49ixbiDDS9MIi-xwCO2p8M1C/exec",
//         type: "post",
//         data: serializedData
//     });

//     // Callback handler that will be called on success
//     request.done(function (response, textStatus, jqXHR){
//         // Log a message to the console
//         console.log("Hooray, it worked!");
//         console.log(response, textStatus, jqXHR);
//     });

//     // Callback handler that will be called on failure
//     request.fail(function (jqXHR, textStatus, errorThrown){
//         // Log the error to the console
//         console.error(
//             "The following error occurred: "+
//             textStatus, errorThrown
//         );
//     });

//     // Callback handler that will be called regardless
//     // if the request failed or succeeded
//     request.always(function () {
//         // Reenable the inputs
//         $inputs.prop("disabled", false);
//     });

// });

// POGING 2


// // Variable to hold request
// var request;

// // Bind to the submit event of our form
// var FAQuserFeedback = document.getElementsByClassName("btn btn-primary mb-2")[0];

// FAQuserFeedback.addEventListener("click", function(event){

//     // Prevent default posting of form - put here to work in case of errors
//     event.preventDefault();

//     // Abort any pending request
//     if (request) {
//         request.abort();
//     }
//     // setup some local variables
//     var $form = $(this);

//     // Let's select and cache all the fields
//     var $inputs = $form.find("input, select, button, textarea");

//     // Serialize the data in the form
//     var serializedData = $form.serialize();
//     var feedback = document.getElementById("input").value;
//     console.log(feedback);

//     // Let's disable the inputs for the duration of the Ajax request.
//     // Note: we disable elements AFTER the form data has been serialized.
//     // Disabled form elements will not be serialized.
//     $inputs.prop("disabled", true);

//     // Fire off the request to /form.php
//     request = $.ajax({
//         url: "https://script.google.com/macros/s/AKfycbzEezeUgQ37fW6nofT9G1_HuBC_49ixbiDDS9MIi-xwCO2p8M1C/exec",
//         type: "post",
//         data: serializedData
//     });

//     // Callback handler that will be called on success
//     request.done(function (response, textStatus, jqXHR){
//         // Log a message to the console
//         console.log("Hooray, it worked!");
//         console.log(textStatus);
//         console.log(request);
//     });

//     // Callback handler that will be called on failure
//     request.fail(function (jqXHR, textStatus, errorThrown){
//         // Log the error to the console
//         console.error(
//             "The following error occurred: "+
//             textStatus, errorThrown
//         );
//     });

//     // Callback handler that will be called regardless
//     // if the request failed or succeeded
//     request.always(function () {
//         // Reenable the inputs
//         $inputs.prop("disabled", false);
//     });

// });






// POGING 1 send data to Google Sheets

// // var $form = document.getElementsByClassName("form-group")[0],
// //      url = 'https://script.google.com/macros/s/AKfycbyifzWkk-oy9W1UihD0BrGG1i8cPgttJnR8393eeZZ_gEDFbM3k/exec'

// var FAQuserFeedback = document.getElementsByClassName("btn btn-primary mb-2")[0];
// var feedback = document.getElementById("input").value;
// console.log(feedback);
// var feedbackParse = JSON.parse(feedback);

// FAQuserFeedback.addEventListener("click", function(e) {
// console.log("e has been called");  
// // e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: feedback
//   }).success(
//     // do something
//   );
// })

// (function () {
//     console.log("test app script!");

// 		FAQuserFeedback.addEventListener("click", function() {
// 		    var feedback = document.getElementById("input").value

// 		    let jsonData = JSON.parse(feedback);




// 		    let xhttp = new XMLHttpRequest();

// 		    xhttp.onload = function() {
// 		        if (this.readyState === 4) {
// 		            if(this.status === 200) {
// 		                console.log(xhttp.responseText)
// 		            } else {
// 		                console.log("Ooops, there was an error...");
// 		            }
// 		        }
// 		    };

// 		    xhttp.open("GET", "https://script.google.com/macros/s/AKfycbyifzWkk-oy9W1UihD0BrGG1i8cPgttJnR8393eeZZ_gEDFbM3k/exec", true);
// 		    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  //by default is HTML
// 		    xhttp.send(jsonData);
// 		});



// }())