console.log("test 1 ");
document.cookie = "language=Croatian; SameSite=None";
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

document.cookie = "user=Ponas; max-age=860000000 domain=.example.com;path=/"

let language = document.cookie;
console.log(language);



//https://javascript.info/cookie
//als we niet specifieren is een cookie tem sessie, tot sluiten browser dus.



function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


// returns the cookie with the given name,
// or undefined if not found
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
  console.log(matches);
}



getCookie(language);



localStorage.setItem("user", "Vince");

// option B
localStorage.language = "Croatian";


function test()
{
 return JSON.parse(localStorage.getItem('site-delijn')).identity.auth.loggedIn;
}


sessionStorage.setItem("backgroundcolor", "blue");









