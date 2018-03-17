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

    //------

    //Pushes data to the database

    //reference to database
    var databaseRef = firebase.database().ref('public-spots');
    //data object
    var spotData = {
      coords:{lat:52.230701, lng: 0.125432},
      iconImg:'assets/marker-street.svg',
      imgUrl:'to come',
      spotName:'The Pulley'
    }
    //push data to database
    databaseRef.push(spotData);

    //------

}());
