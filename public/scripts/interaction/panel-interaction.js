//Hide and show spot information
//global variable for details panel
var spotDetailPanel;

//close spot details panel from panel link
function hideSpotDetails() {
    spotDetailPanel.classList.remove("visible");
};


//open spot panel and display details
function showSpotDetails() {
  //get element
  var spotPanel = document.getElementById("spot-view");
  //set global panel var
  spotDetailPanel = spotPanel;
  //add class to selected element
  spotDetailPanel.classList.add("visible");
  //set panel spotname
  document.getElementById("spot-name").innerHTML = pubSpotInfo.spotName;
  //set panel spotname
  document.getElementById("spot-img").src = pubSpotInfo.imgUrl;
};
