//reference to database for push
//var globalDbRef;

//reference to database
//var publicSpotsRef = firebase.database().ref('public-spots');

//retrieves spots from firebase and pins markers to the map
function getPublicSpots(){

  var publicSpotsRef = firebase.database().ref('public-spots');

  //reference to database
  //var databaseRef = firebase.database().ref('public-spots');
  //create global reference to database
  //globalDbRef = databaseRef;
  
  //when a value changes one of the listed functions is called
  publicSpotsRef.on('value', setPubSpotsData, errPubSpotsData);

  //This gets data and loops through it
  function setPubSpotsData(data) {
    //reference to database objects
    var pubSpotsVal = data.val();
    //useful technique for creating an array
    var pubSpotKeys = Object.keys(pubSpotsVal);
    //creates google maps infowindow for spot details
    var infoWindow = new google.maps.InfoWindow();

    //for loop to run through data
    for (i = 0; i < pubSpotKeys.length; i++) {
      //this is the bit that does the map work
      createMarker(pubSpotKeys[i], pubSpotsVal, infoWindow);
    }
  };
  //catch error loading failure
  function errPubSpotsData(data) {
    //console log info from firebase
    console.log(err);
  };
};
