
//SET SPOT INFO - need to name this stuff clearly!!!

function addMarkers(props, pubSpots) {

  //public spot values
  var coords = pubSpots[props].coords;
  var iconImg = pubSpots[props].iconImg;
  var imgUrl = pubSpots[props].imgUrl;
  var spotName = pubSpots[props].spotName;

  //add marker
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });

  //check for spot image
  if(iconImg){
    marker.setIcon(iconImg);
  }
  //check for no spot name
  if(spotName === undefined) {
    spotName = 'No name'
  }



  console.log(spotName);
};//addMarkers ends
