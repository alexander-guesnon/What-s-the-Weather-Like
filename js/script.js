/* sample code
      var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=36392536f4144190680fc96bd357451d&callback=JSON_CALLBACK";

      $.getJSON(weatherURL).done(function(data){
     $('#currTemp').html("current temp: " + data.main.temp);*/
// my api key ="67150c62fa359ac0ec0e60b78e858a9d"
//test one http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=67150c62fa359ac0ec0e60b78e858a9d&callback=JSON_CALLBACK
//https://forum.freecodecamp.com/t/weather-app-weather-api-callback-not-working/11731/7
/*
got this
JSON_CALLBACK({
"coord":{"lon":-0.13,"lat":51.51},
"weather":[{
  "id":800,
  "main":"Clear",
  "description":"clear sky",
  "icon":"01n"
}],
"base":"stations",
"main":{
  "temp":268.168,
  "pressure":1033.47,
  "humidity":78,
  "temp_min":268.168,
  "temp_max":268.168,
  "sea_level":1041.58,
  "grnd_level":1033.47
},

"wind":{
  "speed":1.38,
  "deg":236.501
},
"clouds":{"all":0},
"dt":1485210164,
"sys":{
  "message":0.0165,
  "country":"GB",
  "sunrise":1485157793,
  "sunset":1485189357},
"id":2643743,"name":"London","cod":200
});
http://openweathermap.org/current
*/

//location lat and long

//icons http://openweathermap.org/img/w/10d.png


//start of code
var weatherAJAXurl="";

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
weatherAJAXurl =  "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=67150c62fa359ac0ec0e60b78e858a9d&callback=JSON_CALLBACK";
console.log(weatherAJAXurl);

});
}else{
  //tell user to please turn on location in order to make that app work
}
