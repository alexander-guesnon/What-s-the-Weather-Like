
var weatherAJAXurl="";
var appToken = "67150c62fa359ac0ec0e60b78e858a9d";
var tempF=0;
var tempC=0;
var currenttempC=true;

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
weatherAJAXurl =  "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid="+ appToken +"&callback=JSON_CALLBACK";
//console.log(position.coords.latitude);
//console.log(position.coords.longitude);
$.ajax({
  type:"GET",
  url: weatherAJAXurl,
  dataType: "jsonp",

});

});
}else{
  //tell user to please turn on location in order to make that app work
}

function JSON_CALLBACK(data){
  //$("#weather-icon").html("<img src=\"http://openweathermap.org/img/w/"+  + ".png\" alt=\""+ data.weather[0].main + "\"></img>");
  tempF=((data.main.temp/ 0.5556)+32).toFixed(2);
  tempC=data.main.temp.toFixed(2);
  $("#temperature").html( "<i class=\"wi wi-thermometer\"></i> " + tempC + " &#176C");
  $("#current-location").html(data.name);
  $("#sky").html(data.weather[0].description);
  $("#wind-speed").html("<i class=\"wi wi-sandstorm\"></i> " + data.wind.speed+" m/s");
  console.log(data.weather[0].icon);
  switch(data.weather[0].icon){
    case "01d.png"://sun
    case "02d.png":{
$("body").css({"background-image": "url(\"images/background_img_3.jpg\")"});
      break;
    }
    case "01n"://moon
    case "02n":{
$("body").css({"background-image": "url(\"images/background_img_7.jpg\")"});
      break;
    }
    case "03n":
    case "04n":
    case "03d"://cloud
    case "04d":{
      $("body").css({"background-image": "url(\"images/background_img_2.jpg\")"});
      break;
    }
    case "09n":
    case "10n":
    case "09d"://rain
    case "10d":{
      $("body").css({"background-image": "url(\"images/background_img_1.jpg\")"});
      break;
    }
    case "11d"://thunder
    case "11d":{
      $("body").css({"background-image": "url(\"images/background_img_5.jpg\")"});
      break;
    }
    case "13n"://snow
    case "13d":{
      $("body").css({"background-image": "url(\"images/background_img_6.jpg\")"});
      break;
    }
    case "50d"://mist
    case "50d":{
      $("body").css({"background-image": "url(\"images/background_img_4.jpg\")"});
      break;
    }
    default:{

    }
  }
  console.log(data);
}
$(document).ready(function(){
  $("#temperature").click(function() {
    if(currenttempC===true){
      currenttempC=false;
      $("#temperature").html( "<i class=\"wi wi-thermometer\"></i> " +tempF + " &#176F");
    }else{
      currenttempC=true;
        $("#temperature").html( "<i class=\"wi wi-thermometer\"></i> " + tempC + " &#176C");
    }
  });
});
