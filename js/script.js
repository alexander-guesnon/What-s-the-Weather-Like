//icons http://openweathermap.org/img/w/10d.png


//start of code
var weatherAJAXurl="";
var appToken = "67150c62fa359ac0ec0e60b78e858a9d";

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
weatherAJAXurl =  "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid="+ appToken +"&callback=JSON_CALLBACK";
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
  console.log(data);
}
