// reference to spots collection in database
var testPublicSpotsRef = firebase.database().ref('public-spots');

// listen for form submit
document.getElementById('upload-form').addEventListener('submit', uploadSpot);

function uploadSpot(e) {
  e.preventDefault();

  // get values
  var coords = {lat:52.28, lng: 0.116211}; // @TODO 2. need to find the best way to capture users position
  var iconImg;
  var imgUrl = "https://firebasestorage.googleapis.com/v0/b/skate-spotter-51441.appspot.com/o/starter-images%2F1408882415497.jpg?alt=media&token=906603cd-2250-4f3f-8314-98f727787ed5"; // @TODO 1. need to refactor code to set this to select file, capture download url then set message
  var spotName = getInputVal('spot-name');

  // capture radio button group
  var spotRadios = document.getElementsByName('spotType');
  // loop through radios to capture value
  for (var i = 0, length = spotRadios.length; i < length; i++) {
    if (spotRadios[i].checked) {
      // selected spotType value
      var spotType = spotRadios[i].value;
      // set iconImg variable to selected value
      iconImg = 'assets/marker-'+spotType+'.svg';
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }

  saveSpot(coords, iconImg, imgUrl, spotName);

  // show confimation message
  var uploadConfirmation = document.getElementById('upload-confirmation-message');
  uploadConfirmation.style.display = 'block'

  // @TODO this needs to happen after the full upload is complete
  // hide alert after 3 seconds
  setTimeout(function(){
    uploadConfirmation.style.display = 'none'
  }, 3000);

}

// function used to capture form input values
function getInputVal(id) {
  return document.getElementById(id).value;
}



// save message to firebase
function saveSpot(coords, iconImg, imgUrl, spotName) {

  var newSpotRef = testPublicSpotsRef.push();

  newSpotRef.set({
    coords: coords,
    iconImg: iconImg,
    imgUrl: imgUrl,
    spotName: spotName
  });

}
