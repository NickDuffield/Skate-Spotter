//global var for current location
var currentPosition;

//Gets users geolocation
function getGeolocation(){
    //geolocation - current position info window. MAY NOT NEED THIS
    youAreHere = new google.maps.InfoWindow;
    // Try to set HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //set global position variable
            currentPosition = pos;
            //set infoWindow to current position
            youAreHere.setPosition(pos);
            youAreHere.setContent('Got ya!');
            youAreHere.open(map);
            map.setCenter(pos);
        }, function() {
            //handleLocationError(true, infoWindow, map.getCenter());
            alert('Are you fucking serious! The Geolocation service has failed.');
        });
    } else {
        // Browser doesn't support Geolocation
        alert('Dude, your browser sucks! It doesn\'t support geolocation.');
    }
}
