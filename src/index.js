let map;

const LOCATIONS = [{
    lat: 31.109333,
    lng: 33.855499
}, {
    lat: 30.109333,
    lng: 29.855499
},
{
    lat: 32.109333,
    lng: 34.855499
}
]



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.109333,
              lng: 34.855499 },
    zoom: 10,
  });

  LOCATIONS.forEach(position => {
         new google.maps.Marker({position, map});
  });
}