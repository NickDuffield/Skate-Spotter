// @TODO general tidy some of this up into small functions

// sets spot image file outside of function - see line 91
var spotFile

// sets iconImg outside of function - see line 28 and 56
var iconImg;





// FUNCTION NUMBER 1

// listen for form submit
document.getElementById('upload-form').addEventListener('submit', uploadSpotImg);

function uploadSpotImg(e) {

  //WHAT DOES THIS BLOCK DO???

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

  // THIS CHUNK ENDS HERE ^


  // SHOULD THIS BE INSIDE HERE???
  // COULD THIS BE A CALLED FUNCTION

  //create reference to storage folders
  var spotImgCollection = firebase.storage().ref('starter-images/' + spotFile.name);

  //upload file to storage location
  var taskRef = spotImgCollection.put(spotFile);

  //monitor the status of my upload and update progress bar
  taskRef.on('state_changed',
    //displays status of image upload on progress bar
    function progress(snapshot){

      // reference to uploader element status - see line 49
      var uploader = document.getElementById('uploader');

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
        firebase.database().ref('public-spots').push(spotData);

        // @TODO set success alert here
        //sets notification alert for success if desired
        //alert('Get the fuck out of here. It worked!');

      }).catch(function(error) {

        // @TODO set failure status here
      // Handle any errors with returned downloadURL
      });
    }
  );

  // TASK REF ENDS HERE

}

// function used to capture form input values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// event listener to set spot image upload variable
spotImageBtn.addEventListener('change', function(e){ // TODO: This needs refactoring for spot data upload
  spotFile = e.target.files[0];
});
