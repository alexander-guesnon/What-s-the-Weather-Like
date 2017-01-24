var weatherAJAXurl="";
var appToken = "67150c62fa359ac0ec0e60b78e858a9d";
var tempF=0;
var tempC=0;
var currenttempC=true;

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
weatherAJAXurl =  "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid="+ appToken +"&callback=JSON_CALLBACK";
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
  $("#weather-icon").html("<img src=\"http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png\" alt=\""+ data.weather[0].main + "\"></img>");
  tempF=((data.main.temp/ 0.5556)+32).toFixed(2);
  tempC=data.main.temp.toFixed(2);
  $("#temperature").html(tempC + " &#176C");
  $("#current-location").html(data.name);
  $("#sky").html("sky: "+data.weather[0].description);
  $("#wind-speed").html(" wind-speed: " + data.wind.speed+" m/s");
  console.log(data);
}
$(document).ready(function(){
  $("#temperature").click(function() {
    if(currenttempC===true){
      currenttempC=false;
      $("#temperature").html(tempF + " &#176F");
    }else{
      currenttempC=true;
        $("#temperature").html(tempC + " &#176C");
    }
  });
});
