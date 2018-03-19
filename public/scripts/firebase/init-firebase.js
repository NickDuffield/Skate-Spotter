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

  //request firebase data(spots)
  getPublicSpots();

}());
