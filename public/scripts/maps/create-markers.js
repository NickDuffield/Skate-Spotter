//creates marker from pubSpotKeys(props) variable
function createMarker(props, pubSpotsVal, infoWindow) {
  //public spot data properties
  var coords = pubSpotsVal[props].coords;
  var iconImg = pubSpotsVal[props].iconImg;
  var imgUrl = pubSpotsVal[props].imgUrl;
  var spotName = pubSpotsVal[props].spotName;

  //marker values
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

  //add event listener to markers for infowindow
  google.maps.event.addListener(marker, 'click', (function (marker, i) {
    return function () {
      //set info window content
      if(infoWinDetails){
        infoWindow.setContent(infoWinDetails);
      }
      //open infowindow
      infoWindow.open(map, marker);
      //captures new details to update the panel
      pubSpotInfo = pubSpotsVal[props];
    }
  })(marker, i));
};
