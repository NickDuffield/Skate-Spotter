//map var for use elsewhere
var map;
//map settings
var options = {
    center:{lat:52.235,lng:0.1218},
    zoom:12,
    mapTypeId:'roadmap'
}
//initilize google map
function initMap() {
  var setMap = new google.maps.Map(document.getElementById('map'), options);
  map = setMap;

  //gets users current location
  //getGeolocation();
}
