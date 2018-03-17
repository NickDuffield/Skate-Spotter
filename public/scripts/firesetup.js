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
  //reference to database. MAY WANT TO MOVE THIS OUT OF HERE???
  var databaseRef = firebase.database().ref('public-spots');
  globalDbRef = databaseRef;

}());
