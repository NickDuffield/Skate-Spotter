//global variable for details panel for close function
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

//global variable for details panel for close function
var spotUploadPanel;

//close spot details panel from panel link
function hideSpotUpload() {
    spotUploadPanel.classList.remove("spot-upload-open");
};

//open spot panel and display details
function showSpotUpload() {
  //get element
  var spotPanel = document.getElementById("spot-upload");
  //set global panel var
  spotUploadPanel = spotPanel;
  //add class to selected element
  spotPanel.classList.add("spot-upload-open");
};
