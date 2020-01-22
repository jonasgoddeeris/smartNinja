


(function () {
    console.log("new JS file connected!");

		bittSubmit.addEventListener("click", function() {
		    let username = document.getElementById("usernameBittInput").value;
		    let text = document.getElementById("textBittArea").value;

		    let jsonData = JSON.stringify({"username": username, "text": text});




		    let xhttp = new XMLHttpRequest();

		    xhttp.onload = function() {
		        if (this.readyState === 4) {
		            if(this.status === 200) {
		                console.log(xhttp.responseText)
		            } else {
		                console.log("Ooops, there was an error...");
		            }
		        }
		    };

		    xhttp.open("POST", "https://morning-wave-19317.herokuapp.com/create-bitt", true);
		    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  //by default is HTML
		    xhttp.send(jsonData);
		});



}())