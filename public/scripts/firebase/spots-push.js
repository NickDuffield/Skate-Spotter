// global spot data object
var spotData = {
  coords: {lat:52.3, lng: 0.116211}, // @TODO not figured it out yet
  iconImg: "", // done - radios set
  imgUrl: "", // comes from database promise
  spotName: "" // done - text input set
}

// global var file set by spotImageBtn event function
var spotFile;

// file caught for upload
spotImageBtn.addEventListener('change', function(e){ // TODO: This needs refactoring for spot data upload
  spotFile = e.target.files[0];
});

// add event listener for form submit
document.getElementById('upload-form').addEventListener('submit', captureSpotDetails);

// capture form input values and set spot object
function captureSpotDetails(e) {
  e.preventDefault();
  // set spot name
  spotData.spotName = document.getElementById('spot-name').value;
  // capture radio button group
  var spotRadios = document.getElementsByName('spotType');
  // loop through radios to capture value
  for (var i = 0, length = spotRadios.length; i < length; i++) {
    if (spotRadios[i].checked) {
      // selected spotType value
      var spotType = spotRadios[i].value;
      // set iconImg variable to selected value
      spotData.iconImg = 'assets/marker-' + spotType + '.svg';
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
  // call send sunction
  sendSpotData();
}

// upload image, retrieve download url and send data
function sendSpotData() {
  //create reference to storage folders
  var spotImgCollection = firebase.storage().ref('starter-images/' + spotFile.name);
  //upload file to storage location
  var taskRef = spotImgCollection.put(spotFile);
  //monitor the status of my upload and update progress bar
  taskRef.on('state_changed',
    //displays status of image upload on progress bar
    function progress(snapshot) {
      // reference to uploader element status - see line 49
      var uploader = document.getElementById('uploader');
      // update progress bar with upload value
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    //handles upload errors
    function error(err) {
      alert('Are you fucking shitting me. Upload failed, you need to try again bro.');
    },
    //runs functions on complete state
    function complete() {
      //retrieves download url for image upload
      spotImgCollection.getDownloadURL().then(function(downloadImgUrl) {
      //set spot data objects image url
      spotData.imgUrl = downloadImgUrl;
      // send data to database
      firebase.database().ref('public-spots').push(spotData);

      // @TODO set success alert here

      }).catch(function(error) {

        // @TODO set failure status here
        // Handle any errors with returned downloadURL

      });
    }
  );
}
