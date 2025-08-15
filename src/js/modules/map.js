export function initMap() {
  // center map
  const center = { lat: 48.86091, lng: 2.3364 };
  
  // custom
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    styles: [
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [{ "visibility": "off" }]
      },
      {
        "featureType": "poi",
        "stylers": [{ "visibility": "off" }]
      }
    ]
  });

  // markers
  const markers = [
    { lat: 48.86091, lng: 2.3364, title: "Louvre Museum", icon: "img/pin-filled.svg" },
    { lat: 48.8602, lng: 2.3333, title: "Tunnel des Tulleries", icon: "img/pin-filled.svg" },
    { lat: 48.8607, lng: 2.3397, title: "Sarcophage d'Abou Roach", icon: "img/pin-filled.svg" },
    { lat: 48.8619, lng: 2.3330, title: "Arc de tri du Carrousel", icon: "img/pin-filled.svg" },
    { lat: 48.8625, lng: 2.3365, title: "Rue de Rivoli", icon: "img/pin-filled.svg" }
  ];

  // add markers
  markers.forEach(marker => {
    new google.maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map: map,
      title: marker.title,
      icon: {
        url: marker.icon,
        scaledSize: new google.maps.Size(40, 40) // set the size of the icon
      }
    });
  });
}

