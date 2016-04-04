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

///////////////////////////
function ubicacion_antipoda(posicion){
	var antipodes_lat = "";
	var antipodes_lng = "";

	antipodes_lat = -posicion.coords.latitude;
	antipodes_lng = (posicion.coords.longitude + 180);
	console.log("latitud antipodas: " + antipodes_lat + ", longitud antipodas: " + antipodes_lng);

	var mapDiv = document.getElementById("map_antipodas");

	var map_antip = new google.maps.Map(mapDiv, {
		center: {lat: antipodes_lat, lng: antipodes_lng},
		zoom: 15
	});
}

function ubicacion(posicion){
	var lat = "";
	var lng = "";

	lat = posicion.coords.latitude;
	lng = posicion.coords.longitude;
	console.log("latitud: "+ lat + ", longitud: " + lng);

	var mapDiv = document.getElementById("map_ubicacion");

	var map_ubic = new google.maps.Map(mapDiv, {
		center: {lat, lng},
		zoom: 15
	});

	ubicacion_antipoda(posicion);
}

function getLocalization(){

	if (Modernizr.geolocation) {
		console.log("geolocation ok");
		navigator.geolocation.getCurrentPosition(ubicacion, null);

	} else {
		alert("Error: Por favor compruebe que está conectado "+
		"a internet y habilite la opción permitir compartir ubicación física");
	}
}

getLocalization();
