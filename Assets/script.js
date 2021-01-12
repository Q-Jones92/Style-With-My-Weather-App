

$(document).ready(function () {
    $("#search").on("click", function () {
    var searchValue = $("#searchValue").val();
    $("#searchValue").val("");
    currentConditions(searchValue);
    });

    function currentConditions(searchValue);
    {
        $("#currentWeather-view").empty();
        var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";
        console.log(APIKey);
        
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIKey;
        console.log(queryURL, "this is with search results");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var cityName = $("<h2>").html("City: " + response.name);
            console.log(city);

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2) + "°F";
            tempF = tempF.toString().replace(/^(\d+)?([.]?\d{0,2})?$/, "");
            console.log(tempF);
    
            var iconImage = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
            iconImage.attr("width", 50);
            console.log(iconImage);
            var humidityCity = $("<h4>").html("Humidity: " + response.main.humidity);
            console.log(humidityCity)
            var windSpeedCity = $("<h4>").html("Wind Speed: " + response.wind.speed);
            console.log(windSpeedCity);
            $("#currentWeather-view").append(cityName, iconImage, tempF, humidityCity, windSpeedCity);
        }); 
    };
    
            
});




$(document).ready(function () {
    $("#search").on("click", function () {
      // get element value with jquery
      var searchValue = $("#searchValue").val();
      $("#searchValue").val("");
      // run logic to get data from API
      // tutor help
      searchWeather(searchValue);
    });

//     var cityNames = [""];

// //   function createCityButton() {
// //     cityNames.forEach(function (city) {
     
// //       var cityNameBtn = $("<button>").attr("data-type", city);
// //       cityNameBtn.text(city);
// //       cityNameBtn.attr("type", "button");
// //       cityNameBtn.addClass("city");
// //     });
// //   }

//   function addButton(name) {
//     var btn = $("<button>").text(name);
//     $(".w3-container").append(btn)
//   }

 
//   console.log($('[name="add-city-button"]'));

//   $('[name="add-city-button"]').on("click", function () {
//     // need prevent default for page to load
//     event.preventDefault();

//     console.log("TEST EVENT LISTENER");
//     $('[name="add-city"]').val();
//     // need to add the bottom to get value in a button****************I think this is missing piece.
//     cityNames.push($('[name="add-city"]').val());
//     $(".city-container").empty();
//     createCityButton();
//   });
//   // trying to get buttons to click and show city temp
// //   $("#cityId").on("click", function () {
// //     var city = $(this).attr("data-type");
// //     console.log(city);
// //     console.log($("#searchValue").val());
// //     weatherSearch(searchValue)
// //   });

//   function weatherSearch(searchValue) {
//             var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";
//             console.log(APIKey);

//             var queryURL =
//             "https://api.openweathermap.org/data/2.5/weather?q=" +
//             searchValue +
//             "&appid=" +
//             APIKey;

//         console.log(queryURL, "this is with search results");

//         $.ajax({
//             url: queryURL,
//             method: "GET",
//         }).then(function (response) {
//             // if this city is already in the array
//             // if this city is not in the array
//             // only then add this to history
//             history.push(searchValue);
//             localStorage.setItem("history", JSON.stringify(history));
//             addButton(searchValue);

//             console.log("This is the weather data: ", response);

//             $(".city").html(`<h2>${response.name} ( ${moment().format("MMMM DD, YYYY")} ) </h2>`);
//             $("#icon0").attr("src","https://openweathermap.org/img/wn/" + response.weather[0].icon +"@2x.png");
//             localStorage.setItem("city", `${response.name}`);
//             $(".wind").text(`Wind Speed: ${response.wind.speed} MPH`);
//             $(".humidity").text(`Humidity: ${response.main.humidity}%`);
//             let temp = `Temperature (k): ${response.main.temp}`;
//                 temp += `<br />Temperature (F): ${Math.round((response.main.temp - 273.15) * 1.8 + 32)}°F`;
//                  $(".temp").html(temp);
//                  lat = response.coord.lat;
//                  lon = response.coord.lon;
//                 console.log("This is lat and lon from weather function", lat, lon);


//         });

//     }



// });

