// On page load toon map
document.onload = function() {
	initMap();
};

// Init Map
var myMap;

var floridaPlaces = [
	{
		name: 'Kennedy Space Center',
		location: {lat: 28.5728722,lng: -80.6489808}
	}, {
		name: 'Cape Canaveral',
		location: {lat: 28.396837, lng: -80.605659}
	}, {
		name: 'Florida',
		location: {lat: 27.994402,lng: -81.760254}
	}, {
		name: 'Landing Searstown',
		location: {lat: 28.57596, lng: -80.801638}
	}
];

function initMap() {
	// Map style 
	var myStyles =[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1b163f"
      },
      {
        "saturation": -40
      },
      {
        "lightness": -10
      },
      {
        "visibility": "on"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#21213b"
      },
      {
        "saturation": -10
      },
      {
        "lightness": -5
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#2e3e56"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d4594b"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "color": "#2e3e56"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#152030"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      {
        "color": "#152030"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "stylers": [
      {
        "color": "#152030"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "color": "#152030"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "color": "#152030"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "color": "#152030"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#445b5e"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4c5767"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a53154"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f39e53"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a53154"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263f62"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];
	// Ddirection variables
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

	// Mapopties
	var mapOptions = {
		center: {
			lat: 52.07436, 
			lng: 4.32148
		},
		zoom: 15,
		styles: myStyles 
	};

	// Nieuwe map aanmaken en toevoegen op de pagina
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Map direction display 
	directionsDisplay.setMap(myMap);
	
	// Fuctie aanroepen
	calculateAndDisplayRoute(directionsService, directionsDisplay);

}

// Functie route tonen
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	
	var wayp = [];

	for(var i = 1; i < floridaPlaces.length; i++){
		wayp[i-1] = {location : floridaPlaces[i].location};		
	}
	console.log(wayp);
	console.log(floridaPlaces[0].location);

	var request = {
		origin: floridaPlaces[0].location,
		waypoints: wayp,
		destination: floridaPlaces[0].location,
		travelMode: 'WALKING',
		optimizeWaypoints : true
	};

	directionsService.route(request, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response); // display the route
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}