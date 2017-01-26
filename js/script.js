var weatherAJAXurl = "";
var appToken = "67150c62fa359ac0ec0e60b78e858a9d";
var tempF = 0;
var tempC = 0;
var tempMS = 0;
var tempKT = 0;
var currenttempC = true;
var currenttempMS = true;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        weatherAJAXurl = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=" + appToken + "&callback=JSON_CALLBACK";
        //console.log(position.coords.latitude);
        //console.log(position.coords.longitude);
        $.ajax({
            type: "GET",
            url: weatherAJAXurl,
            dataType: "jsonp",

        });

    });
} else {

}

function JSON_CALLBACK(data) {

    tempF = ((data.main.temp / 0.5556) + 32).toFixed(2);
    tempC = data.main.temp.toFixed(2);
    tempKT = (data.wind.speed * 1.9438444924574).toFixed(2);
    tempMS = data.wind.speed.toFixed(2);
    $("#temperature").html("<i class=\"wi wi-thermometer\"></i> " + tempC + " &#176C");
    $("#current-location").html(data.name);
    $("#sky").html(data.weather[0].description);
    $("#wind-speed").html("<i class=\"wi wi-sandstorm\"></i> " + tempMS  + " m/s");
    console.log(data.weather[0].icon);
    switch (data.weather[0].icon) {
        case "01d": //sun
        case "02d":
            {

                $("body").css({
                    "background-image": "url(\"images/background_img_3.jpg\")"
                }); //sun
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.2)");
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.2)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.5)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.2)");
                    });

                break;
            }
        case "01n": //moon
        case "02n":
            {
                $("body").css({
                    "background-image": "url(\"images/background_img_7.jpg\")"
                }); //moon
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.1)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.5)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.1)");
                    });
                break;
            }
        case "03n":
        case "04n":
        case "03d": //cloud
        case "04d":
            {
                $("body").css({
                    "background-image": "url(\"images/background_img_2.jpg\")"
                }); //cloud
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.3)");
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.3)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.6)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.3)");
                    });
                break;
            }
        case "09n":
        case "10n":
        case "09d": //rain
        case "10d":
            {
                $("body").css({
                    "background-image": "url(\"images/background_img_1.jpg\")"
                }); //rain
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.4)");
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.4)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.7)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.4)");
                    });
                break;
            }
        case "11d": //thunder
        case "11d":
            {
                $("body").css({
                    "background-image": "url(\"images/background_img_5.jpg\")"
                }); //thunder
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.2)");
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.2)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.5)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.2)");
                    });
                break;
            }
        case "13n": //snow
        case "13d":
            {
                $("body").css({
                    "background-image": "url(\"images/background_img_6.jpg\")"
                }); //snow
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.5)");
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.5)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.8)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.5)");
                    });
                break;
            }
        case "50d": //mist
        case "50d":
            {
                $("body").css({
                    "background-image": "url(\"images/background_img_4.jpg\")"
                }); //sun
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.3)");
                $(".title, #current-location, #sky, #temperature, #wind-speed").css("background-color", "rgba(127, 140, 141,0.3)");
                $("#temperature, #wind-speed").hover(function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.6)");
                    },
                    function() {
                        $(this).css("background-color", "rgba(127, 140, 141,0.3)");
                    });
                break;
            }
        default:
            {

            }
    }
    console.log(data);
}

$(document).ready(function() {
  $("#temperature").click(function() {
      if (currenttempC === true) {
          currenttempC = false;
          $("#temperature").html("<i class=\"wi wi-thermometer\"></i> " + tempF + " &#176F");
      } else {
          currenttempC = true;
          $("#temperature").html("<i class=\"wi wi-thermometer\"></i> " + tempC + " &#176C");
      }
  });
  $("#wind-speed").click(function() {
      if (currenttempMS === true) {
          currenttempMS = false;
          $("#wind-speed").html("<i class=\"wi wi-thermometer\"></i> " + tempKT + " kt");
      } else {
          currenttempMS = true;
          $("#wind-speed").html("<i class=\"wi wi-thermometer\"></i> " + tempMS + " m/s");
      }
  });
});
