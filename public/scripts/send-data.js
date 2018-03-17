//uploads spot information to database
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change', function(e){
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
       coords:{lat:52.3, lng: 0.116211},
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
