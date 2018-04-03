// @TODO general tidy some of this up into small functions

// reference to spots collection in database
var testPublicSpotsRef = firebase.database().ref('public-spots');

// sets spot image file outside of function
var spotFile

// sets iconImg outside of function
var iconImg;

// reference to uploader element status
var uploader = document.getElementById('uploader');

// listen for form submit
document.getElementById('upload-form').addEventListener('submit', uploadSpotImg);

function uploadSpotImg(e) {
  e.preventDefault();

  // sets spotname variable
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

  //create reference to storage folders
  var spotImgCollection = firebase.storage().ref('starter-images/' + spotFile.name);

  //upload file to storage location
  var taskRef = spotImgCollection.put(spotFile);
  //monitor the status of my upload and update progress bar
  taskRef.on('state_changed',
    //displays status of image upload on progress bar
    function progress(snapshot){
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    //handles upload errors
    function error(err){
      alert('Are you fucking shitting me. Upload failed, you need to try again bro.');
    },
    //runs functions on complete state
    function complete(){
      //retrieves download url for image upload
      spotImgCollection.getDownloadURL().then(function(downloadImgUrl) {

        //sample data
        var spotData = {
          coords: {lat:52.3, lng: 0.116211}, // @TODO juat this left to set
          iconImg: iconImg,
          imgUrl: downloadImgUrl,
          spotName: spotName
        }

        // sets captured data
        testPublicSpotsRef.push(spotData);

        // @TODO set success alert here
        //sets notification alert for success if desired
        //alert('Get the fuck out of here. It worked!');

      }).catch(function(error) {

        // @TODO set failure status here
      // Handle any errors with returned downloadURL
      });
    }
  );

}

// function used to capture form input values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// event listener to set spot image upload variable
spotImageBtn.addEventListener('change', function(e){ // TODO: This needs refactoring for spot data upload
  spotFile = e.target.files[0];
});
