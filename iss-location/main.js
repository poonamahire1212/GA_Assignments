const map = L.map('map').setView([0,0], 1);
const tileLayerUrl = "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=KvMcwj1SoedCbNG3plMT";
const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
L.tileLayer(tileLayerUrl, {attribution}).addTo(map);
const satIcon = L.icon({
    iconUrl: 'satellite.png',
    iconSize: [50, 40],
    iconAnchor: [25, 20],
    popupAnchor: [-2, -20],
});
const marker = L.marker([0, 0], {icon: satIcon}).addTo(map);
marker.bindPopup("This is International Space Station").openPopup();


const endpoint = "http://api.open-notify.org/iss-now.json";
//const longitudePoint = document.querySelector(".longitude");
//const latitudePoint = document.querySelector(".latitude");
function convertToJSObject(response){
    return response.json();
}

function handleData(data){
    //longitudePoint.innerHTML = `Longitude: ${data.iss_position.longitude}`;
    //latitudePoint.innerHTML = `Latitude: ${data.iss_position.latitude}`;
    marker.setLatLng({lat: data.iss_position.latitude, lng: data.iss_position.longitude});
}

function callAPI(){
    fetch(endpoint).then(convertToJSObject).then(handleData);
}

window.onload = function(){
    setInterval(callAPI, 5000);
};

