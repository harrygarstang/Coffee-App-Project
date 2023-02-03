// when button is clicked, the function starts
$("button").on("click", function() {
  console.log(city)

  var city = $("#input-selector").val()
  var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + myKey

$.ajax({
  url: geocodeUrl,
  method: "GET"
}).then (queryCoffeesFromGeocodeResponse); 

});

// function that query coffees in the location searched
function queryCoffeesFromGeocodeResponse (response) {
  var latitude = response.results[0].geometry.location.lat;
  var longitude = response.results[0].geometry.location.lng;
  // build queryurl
  var queryUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=500&types=cafe" + "&key=" + myKey
  console.log(queryUrl)
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    // loop through the results in the response data
    for (var i = 0; i < response.results.length; i++) {
      // get the coffee name and rating
      var coffeeName = response.results[i].name;
      var rating = response.results[i].rating;
      console.log(coffeeName);
      console.log(rating);
      // add to html
      
  
      // add the coffee name and rating to the div
  

      $('#shop1').text("Coffee shop: " + coffeeName + "Rating: " +  rating);
  
      // append the div to the container
    
    
    }
  
  }
)
};