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
    var suggestion = $("#suggestion");

    var coffeePlace = [
      (coffeePlace1 = response.results[0].name),
      (coffeePlace2 = response.results[1].name),
      (coffeePlace3 = response.results[2].name),
      (coffeePlace3 = response.results[3].name),
      (coffeePlace4 = response.results[4].name)
    ];
    // loop through the results in the response data
    for (var i = 0; i < coffeePlace.length; i++) {
      coffeeBlock = $("<div>");
      coffeeBlock.css({
        "background-color": "black",
        color: "white",
        padding: "10px",
        border: "solid white",
      });
      // get the coffee name and rating

      var rating = response.results[i].rating;
      var address = response.results[i].vicinity;
      
      coffeeBlock.append("<h5>Coffee Shop: </h5>" + coffeePlace[i])
      coffeeBlock.append("<h5>Rating: </h5>" + rating)
      coffeeBlock.append("<h5>Address: </h5>"+ address)
      
      suggestion.append(coffeeBlock)
  
      // add the coffee name and rating to the div

  
      // append the div to the container
    
    
    }
  
  }
)
};