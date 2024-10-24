// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.589316, -46.659423], 13);



    var greenIcon = L.icon({
    iconUrl: 'https://e7.pngegg.com/pngimages/626/465/png-clipart-puppy-puppy-animal.png',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  

  
  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.589316, -46.659423]).addTo(map);
  marker.bindPopup("hey hey doggy").openPopup();

var marker2 = L.marker([-23.589316, -46.659423], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("Amada turma de DMD, eu me perdi aqui").openPopup();

  
});
