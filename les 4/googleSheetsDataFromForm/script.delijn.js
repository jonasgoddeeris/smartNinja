

let submitButton = document.getElementsByClassName("medium inline alpha button link-post-feedback")[0];

submitButton.addEventListener("click", checkResponse);



function checkResponse() {

event.preventDefault();
var feedbackValue = document.getElementById("textarea1").value;
var fullDate = new Date();
var dd = String(fullDate.getDate()).padStart(2, '0');
var mm = String(fullDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = fullDate.getFullYear();
var today = dd + '/' + mm + '/' + yyyy;
var page = window.location.pathname;
var data = { input: feedbackValue, timeStamp: fullDate, dateOnly: today, page: page };


fetch('https://hooks.zapier.com/hooks/catch/3106303/oh0og6m/', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
})
// .then((response) => response.json())
.then(function(response) {
  return response.json()
} )
// .then((data) => {
//   console.log('Success:', data);
// })
.then(function(data) {
  console.log('Success:', data);
})
.catch(function(error) {
  console.error('Error:', error);
});


}