// Pseudocode here
var city = "Bristol"
// var queryUrl = "https://www.google.com/maps/embed/v1/MAP_MODE?key="+ myKey + "&city=" + city;

var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + myKey




// var queryUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=" + myKey

$.ajax({
  url: geocodeUrl,
  method: "GET"
}).then (queryCoffeesFromGeocodeResponse); {

  // other ajax call
};

function queryCoffeesFromGeocodeResponse (response) {
  
  var latitude = response.results[0].geometry.location.lat;
  var longitude = response.results[0].geometry.location.lng;

  // build queryurl
  var queryUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=500&types=food" + "&key=" + myKey
  console.log(queryUrl)
  
  // call ajax with queryurl
}

