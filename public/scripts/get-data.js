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
    for (i = 0; i < pubSpotKeys.length; i++) {
      //this is the bit that does the map work
      addMarkers(pubSpotKeys[i], pubSpots);
    }
  };//setPubSpots ends
  //catch error loading failure
  function errPubSpots(data) {
    console.log('Error!');
    console.log(err);
  };


};
