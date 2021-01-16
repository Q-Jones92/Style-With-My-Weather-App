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
  // var oneCallAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=currently,alerts&appid=" + APIKey;

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
      // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".city").html(`<h2>${response.name} ( ${moment().format("MMMM DD, YYYY, h:mm a")} ) </h2>`);
      // $(".luxon").html(`luxon <h2>${response.name} ( ${DateTime.local().toFormat('MMMM dd, yyyy')} ) </h2>`);

      
      $("#icon0").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
      $(".wind").text(`Wind Speed: ${Math.round(response.wind.speed)}MPH`);
      // $(".humidity").text("Humidity: " + response.main.humidity);
      $(".humidity").text(`Humidity: ${response.main.humidity}%`);
      // $("#dailyClouds").text(`Daily Clouds: ${response.current[0].clouds}%`);  
      // does not work even after removing from 6 day forecast BC did not have id tag attached. used the descriptions from current API 
      $("#dailyClouds").text(`Precipitation: ${response.clouds.all}%`);
      $("#description").text(`Description: ${response.weather[0].description}`);


      //maybe use current day API key

      // Convert the temp to fahrenheit
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      // add temp content to html
      // $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text(`Temperature: ${Math.round((response.main.temp - 273.15) * 1.8 + 32)}°F`);
      $(".tempC").text(`Temperature: ${Math.round((response.main.temp - 273.15) )}°C`);



      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

      lat = response.coord.lat;
      lon = response.coord.lon;
      console.log("This is lat and lon from weather function", lat, lon);
      forecast(lat, lon); 

  
    });
    $(".daysForecast1").html(`${moment().add(1, "d").format("MMMM DD, YYYY")}`);
    $(".daysForecast2").html(`${moment().add(2, "d").format("MMMM DD, YYYY")}`);
    $(".daysForecast3").html(`${moment().add(3, "d").format("MMMM DD, YYYY")}`);
    $(".daysForecast4").html(`${moment().add(4, "d").format("MMMM DD, YYYY")}`);
    $(".daysForecast5").html(`${moment().add(5, "d").format("MMMM DD, YYYY")}`);
    $(".daysForecast6").html(`${moment().add(6, "d").format("MMMM DD, YYYY")}`);

  }

  function forecast(lat, lon) {
    //replaced (lat,lon) with (searchValue) and humidity showed up
    var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";

    // var part = hourly;
    console.log("Forecast", APIKey);
  
    // excluded minuetly, hourly
    var oneCallAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=currently,alerts&appid=" + APIKey;
    // var fiveDayForecast= "http://api.openweathermap.org/data/2.5/uvi?lat=" +lat+ "&lon=" +lon+ "&appid=" +APIKey;
    console.log("This is the var fivDayForecast: ", oneCallAPI);

    $.ajax({
      // url: fiveDayForecast,
      url: oneCallAPI,
      method: "GET",
    }).then(function (response) {

      // HOURLY FORECAST
      $("#hour1").text((`Hourly (F): ${Math.round((response.hourly[0].temp - 273.15) * 1.8 +32)}`));
      $("#hour1C").text(`Hourly /(C) ${Math.round(response.hourly[1].temp - 273.15)}`);
      $("#hour1C").text(`Hourly /(C) ${Math.round(response.hourly[1].temp - 273.15)}`);
      $(".city").html(`<h2>${response.name} ( ${moment().format("MMMM DD, YYYY, h:mm a")} ) </h2>`);


      moment().endOf('day').fromNow(); 
    
      $("#hour2").text(`Hourly (F): ${Math.round((response.hourly[1].temp - 273.15) * 1.8 +32)}`);
      $("#hour3").text(`Hourly (F): ${Math.round((response.hourly[2].temp - 273.15) * 1.8 +32)}`);
      $("#hour4").text(`Hourly (F): ${Math.round((response.hourly[3].temp - 273.15) * 1.8 +32)}`);
      $("#hour5").text(`Hourly (F): ${Math.round((response.hourly[4].temp - 273.15) * 1.8 +32)}`);
      $("#hour6").text(`Hourly (F): ${Math.round((response.hourly[5].temp - 273.15) * 1.8 +32)}`);
      $("#hour7").text(`Hourly (F): ${Math.round((response.hourly[6].temp - 273.15) * 1.8 +32)}`);


      $("#icon1").attr("src","https://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + "@2x.png");
      $("#humidity1").text(`Humidity: ${response.daily[0].humidity}%`);
      $("#temp1").text(`Temperature (F): ${Math.round((response.daily[0].temp.day - 273.15) * 1.8 + 32)}`);
      $("#temp1C").text(`Temperature (C): ${Math.round((response.daily[0].temp.day - 273.15))}`);
      // trying to get both F and C to fit in 1 line
      $("#tempall").text(`${Math.round((response.daily[0].temp.day - 273.15) * 1.8 + 32)})`/` (${Math.round(response.daily[0].temp.day - 273.15)} C`);
      // hourly cloud percentage. NEED THE [] number or is undefined
      $("#dailyClouds1").text(`Precipitation: ${response.daily[0].clouds}%`);
      // $("#dailyClouds1").text(`Daily Clouds: ${response.hourly[0].clouds}%`);


      // .weather has to [0] to get the description
      $("#description1").text(`Description: ${response.daily[0].weather[0].description}`);




      console.log(response.daily[0].temp);

      $("#icon2").attr("src","https://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + "@2x.png");
      $("#humidity2").text(`Humidity: ${response.daily[1].humidity}%`);
      $("#temp2").text(`Temperature (F): ${Math.round((response.daily[1].temp.day - 273.15) * 1.8 + 32)}`);
      $("#temp2C").text(`Temperature (C): ${Math.round((response.daily[1].temp.day - 273.15))}`);
      // $("#dailyClouds1").text(`Daily Clouds: ${response.hourly[24].clouds}%`);
      $("#dailyClouds2").text(`Precipitation: ${response.daily[1].clouds}%`);
      $("#description2").text(`Description: ${response.daily[1].weather[0].description}`);
      $("#time").text(`Time: ${response.timezone_offset}`);


      $("#icon3").attr("src","https://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon +"@2x.png");
      $("#humidity3").text(`Humidity: ${response.daily[2].humidity}%`);
      $("#temp3").text(`Temperature (F): ${Math.round((response.daily[2].temp.day - 273.15) * 1.8 + 32)}`);
      $("#temp3C").text(`Temperature (C): ${Math.round((response.daily[2].temp.day - 273.15))}`);
      $("#dailyClouds3").text(`Precipitation: ${response.hourly[2].clouds}%`);
      $("#description3").text(`Description: ${response.daily[2].weather[0].description}`);

      $("#icon4").attr("src","https://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png");
      $("#humidity4").text(`Humidity: ${response.daily[3].humidity}%`);
      $("#temp4").text(`Temperature (F): ${Math.round((response.daily[3].temp.day - 273.15) * 1.8 + 32)}`);
      $("#temp4C").text(`Temperature (C): ${Math.round((response.daily[3].temp.day - 273.15))}`);
      $("#dailyClouds4").text(`Precipitation: ${response.daily[3].clouds}%`);
      $("#description4").text(`Description: ${response.daily[3].weather[0].description}`);

      $("#icon5").attr("src", "https://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + "@2x.png");
      $("#humidity5").text(`Humidity: ${response.daily[4].humidity}%`);
      $("#temp5").text(`Temperature (F): ${Math.round((response.daily[4].temp.day - 273.15) * 1.8 + 32)}`);
      $("#temp5C").text(`Temperature (C): ${Math.round((response.daily[4].temp.day - 273.15))}`);
      $("#dailyClouds5").text(`Precipitation: ${response.daily[4].clouds}%`);
      $("#description5").text(`Description: ${response.daily[4].weather[0].description}`);

      $("#icon6").attr("src", "https://openweathermap.org/img/wn/" + response.daily[5].weather[0].icon + "@2x.png");
      $("#humidity6").text(`Humidity: ${response.daily[5].humidity}%`);
      $("#temp6").text(`Temperature (F): ${Math.round((response.daily[4].temp.day - 273.15) * 1.8 + 32)}`);
      $("#temp6C").text(`Temperature (C): ${Math.round((response.daily[4].temp.day - 273.15))}`);
      $("#dailyClouds6").text(`Precipitation: ${response.daily[5].clouds}%`);
      $("#description6").text(`Description: ${response.daily[5].weather[0].description}`);





      forecast(searchValue); //calling the forecast function
    });
  }
  });




// INTERACTIVE CARDS




  







