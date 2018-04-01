// reference to spots collection in database
var testPublicSpotsRef = firebase.database().ref('public-spots');

// listen for form submit
document.getElementById('upload-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // get values
  var coords = {lat:52.28, lng: 0.116211};
  var iconImg = "assets/marker-street.svg";
  var imgUrl = "https://firebasestorage.googleapis.com/v0/b/skate-spotter-51441.appspot.com/o/starter-images%2F1408882415497.jpg?alt=media&token=906603cd-2250-4f3f-8314-98f727787ed5";
  var spotName = getInputVal('spot-name');

  saveSpot(coords, iconImg, imgUrl, spotName);
  //console.log(123);
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

/*

//gets controls for upload in dom
var uploader = document.getElementById('uploader');
var spotImg = document.getElementById('spot-img');

// @TODO need to use a submit event for the upload.

//add event listener to file upload
spotImg.addEventListener('change', function(e){
  //get file reference from file input event
  var file = e.target.files[0];
  //create reference to storage folders
  var storageRef = firebase.storage().ref('starter-images/' + file.name);
  //upload file to storage location
  var task = storageRef.put(file);

  //monitor the status of my upload and update progress bar
  task.on('state_changed',
    //displays status of image upload on progress bar
    function progress(snapshot){
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    //handles upload errors
    function error(err){
      //do something
    },
    //runs functions on complete state
    function complete(){
      //call function to send data to firebase
      sendData(storageRef);
    }
  );
});

//sends data to firebase
function sendData(storageRef){
  //retrieves download url for image upload
  storageRef.getDownloadURL().then(function(downloadImgUrl) {
     //sample data
     var spotData = {
       coords:{lat:52.24, lng: 0.116211},
       iconImg:'assets/marker-ditch.svg',
       imgUrl:downloadImgUrl,
       spotName:'Orchard Park Skatepark'
     }
     //push data to database once download url is retrieved
     globalDbRef.push(spotData);
   }).catch(function(error) {
     // Handle any errors with returned downloadURL
   });
};

*/
