//global varaiables
var globalDbRef;

//connect to firebase
(function(){
  //Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlgCCTAy66zAxbI6qaFpjiOJ6gJdGGNAE",
    authDomain: "skate-spotter-51441.firebaseapp.com",
    databaseURL: "https://skate-spotter-51441.firebaseio.com",
    projectId: "skate-spotter-51441",
    storageBucket: "skate-spotter-51441.appspot.com",
    messagingSenderId: "852736444003"
  };
  firebase.initializeApp(config);
    //reference to database
    var databaseRef = firebase.database().ref('public-spots');
    globalDbRef = databaseRef;

    /*var spotData = {
      coords:{lat:52.3, lng: 0.116211},
      iconImg:'assets/marker-ditch.svg',
      imgUrl:'to come',
      spotName:'Orchard Park Skatepark'
    }
    //push data to database once download url is retrieved
    databaseRef.push(spotData);*/

}());
