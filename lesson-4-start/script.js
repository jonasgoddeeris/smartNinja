// Test application URL: https://morning-wave-19317.herokuapp.com/get-all-bitts


(function () {  // just a wrapper to avoid global scope

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200) {

                	console.log(xhttp.responseText);

			        let container = document.getElementById("bittsContainer");
					let bitts = JSON.parse(xhttp.responseText);

					for (let bitt of bitts) {
						let bittElement = document.createElement("p");
						// bittElement.innerHTML = bitt.text + "<br>  Gepost door :";
						// bittElement.innerHTML += bitt.username;
						bittElement.innerHTML += bitt.text + "<br> <small>" + bitt.username + "</small>";


						container.appendChild(bittElement);
					}

            } else {
                console.log("Ooops, there was an error...");
            }
        }
    };

    xhttp.open("GET", "https://morning-wave-19317.herokuapp.com/get-all-bitts", true);
    xhttp.send();

}())