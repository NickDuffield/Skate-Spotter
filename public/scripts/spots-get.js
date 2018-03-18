//reference to database for push
var globalDbRef;

//retrieves spots from firebase and pins markers to the map
function spotsGet(){
  //reference to database
  var databaseRef = firebase.database().ref('public-spots');
  globalDbRef = databaseRef;
  //when a value changes one of the listed functions is called
  databaseRef.on('value', setPubSpots, errPubSpots);

  //This gets data and loops through it
  function setPubSpots(data) {
    //reference to database objects
    var pubSpots = data.val();
    //useful technique for creating an array
    var pubSpotKeys = Object.keys(pubSpots);

    //creates google maps infowindow for spot details
    var infowindow = new google.maps.InfoWindow();

    //for loop to run through data
    for (i = 0; i < pubSpotKeys.length; i++) {
      //this is the bit that does the map work
      addMarkers(pubSpotKeys[i], pubSpots, infowindow);
    }
  };
  //catch error loading failure
  function errPubSpots(data) {
    //console log info from firebase
    console.log(err);
  };
};

//creates marker from pubSpotKeys(props) variable
function addMarkers(props, pubSpots, infowindow) {
  //public spot data properties
  var coords = pubSpots[props].coords;
  var iconImg = pubSpots[props].iconImg;
  var imgUrl = pubSpots[props].imgUrl;
  var spotName = pubSpots[props].spotName;

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
        infowindow.setContent(infoWinDetails);
      }
      //open infowindow
      infowindow.open(map, marker);
      //captures new details to update the panel
      pubSpotInfo = pubSpots[props];
    }
  })(marker, i));
};
