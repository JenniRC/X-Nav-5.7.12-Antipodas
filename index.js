function initMapAnti(position) {
	// Create a map object and specify the DOM element for display.
	var lat_ant=-posicion.coords.latitude;
	var long_ant=(posicion.coords.longitude + 180);

	var mapDiv = document.getElementById("map_ant");

		var map_ant = new google.maps.Map(mapDiv, {
			center: {lat: lat_ant, lng: long_ant},
			zoom: 15
		});
}

function initMap(posicion) {
	var	latitude = position.coords.latitude;
	var	long=position.coords.longitude;
	  // Create a map object and specify the DOM element for display.
		var maaap = document.getElementById("map");
		var map = new google.maps.Map(maaap, {
			center: {latitude, long},
			zoom: 15
		});

		initMapAnti(posicion);
	}

function geolocation(){
			if (Modernizr.geolocation) {
				navigator.geolocation.getCurrentPosition(ubicacion, null);
				console.log("geolocation ok");
			} else {
				alert("not supported or permit share your position!")
			}
		}

geolocation();



