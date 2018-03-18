function getSpots(){ //name these functions consitantly and clearly. Make a list

  //reference to database. MAY WANT TO MOVE THIS OUT OF HERE???
  var databaseRef = firebase.database().ref('public-spots');

  databaseRef.on('value', setPubSpots, errPubSpots);

  //globalDbRef = databaseRef;

  //pull spot from database and add them to the map

  //This just gets data and loops through it
  function setPubSpots(data) {
    //reference to database objects
    var pubSpots = data.val();
    //useful technique for creating an array
    var pubSpotKeys = Object.keys(pubSpots);
    //loop for adding multiple pins

    //infowindow for spot details
    var infowindow = new google.maps.InfoWindow();

    function addMarkers(props) {
      //public spot values
      var coords = pubSpots[props].coords;
      var iconImg = pubSpots[props].iconImg;
      var imgUrl = pubSpots[props].imgUrl;
      var spotName = pubSpots[props].spotName;
      //add marker
      var marker = new google.maps.Marker({
        position: coords,
        map: map
      });
      //check for spot image
      if(iconImg){
        marker.setIcon(iconImg);
      }
      //check for no spot name
      if(spotName === undefined) {
        spotName = 'No name'
      }
      //construct infowindow
      var infoWinDetails = '<div class="map-spot-marker-title">'+spotName+'</div>'+'<button type="button" class="btn btn-link btn-sm info-btn" onclick="showSpotDetails()">Show spot</button>';
      //add event listener to spots
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          //set info window content
          if(infoWinDetails){
            infowindow.setContent(infoWinDetails);
          }
          //open infowindow
          infowindow.open(map, marker);
          //captures new details to update the panel
          pubSpotInfo = pubSpots[props];
        }
      })(marker, i));
    };

    for (i = 0; i < pubSpotKeys.length; i++) {
      //this is the bit that does the map work
      addMarkers(pubSpotKeys[i]);
    }
  };//setPubSpots ends
  //catch error loading failure
  function errPubSpots(data) {
    console.log('Error!');
    console.log(err);
  };
};
