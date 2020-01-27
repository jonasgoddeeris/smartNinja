var options = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var latitude = (crd.latitude);
  var longitude = (crd.longitude);

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  // document.getElementById("result").innerHTML = ("Your position is = " + latitude + " " + longitude);
          map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: latitude, lng: longitude},
          zoom: 20
        });
  mapMyPosition()
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



function mapMyPosition() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: latitude, lng: longitude},
          zoom: 8
        });
      }