   // telling html to run after input has been given
   $(document).ready(function () {
    $("#search").on("click", function () {
      // get element value with jquery
      var searchValue = $("#searchValue").val();
      $("#searchValue").val("");
      // run logic to get data from API
      // tutor help
      console.log (searchValue, "button works");
      weatherSearch(searchValue);
    });

    $("searchValue").keypress(function (event) {
    // try to use keyCode === 13
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#search").click();
    }
    });

 
    // ************************Need the below line 76, 78, 85 to recall search
    $('[name="add-city-button"]').on("click", function () {
    // need prevent default for page to load
    event.preventDefault();
  });

   


function weatherSearch(searchValue) {
  var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";
  console.log(APIKey);

  var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIKey;
  console.log(queryURL, "this is with search results");

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
    $(".humidity").text(`Humidity: ${response.main.humidity}%`);

      
      // Convert the temp to fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

      // add temp content to html
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

  
    });
  }
  });





// $(document).ready(function () {
//     // $("#search").on("click", function () {
//     // var searchValue = $("#searchValue").val();
//     // $("#searchValue").val("");
//     // currentConditions(searchValue);
//     // });

// var cityNames = ["Houston"];
//   function createCityButton() {
//     cityNames.forEach(function (city) {
//       var cityNameBtn = $("<button>").attr("data-type", city);
//       cityNameBtn.text(city);
//       cityNameBtn.attr("type", "button");
//       cityNameBtn.addClass("city");
//     });
//   }
//   console.log("TEST EVENT LISTENER");
//   $('[name="add-city"]').val();
// //   cityNames.push($('[name="add-city"]').val());
//   $(".city-container").empty();
//   createCityButton();


//   function weatherSearch(searchValue) {
// // This is our API key. Add your own API key between the ""
// var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";
// console.log(APIKey);
// var searchValue = $("#searchValue").val();
// $("#searchValue").val("");




// // Here we are building the URL we need to query the database
// // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

        
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIKey;
// console.log(queryURL, "this is with search results");

// // We then created an AJAX call
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//     history.push(searchValue);
//     localStorage.setItem("history", JSON.stringify(history));
//     addButton(searchValue);
//     console.log("This is the weather data: ", response);

//   // Create CODE HERE to Log the queryURL
//   // Create CODE HERE to log the resulting object
//   console.log(response);
//   // Create CODE HERE to calculate the temperature (converted from Kelvin)
//   // Create CODE HERE to transfer content to HTML
//   $('.city').html(`<h1>${response.name} Weather Details</h1>`);
//   $('.wind').text(`Wind Speed: ${response.wind}`);
//   $('.humidity').text(`Humidity: ${response.main.humidity}`);
//   let temp = `Temperature (k): ${response.main.temp}`;
//   temp += `<br />Tempature (F): ${(response.main.temp - 273.15) * 1.80 + 32}`;
//   $('.temp').html(temp);
//   // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//   // Create CODE HERE to dump the temperature content into HTML

// });
// }

// });




