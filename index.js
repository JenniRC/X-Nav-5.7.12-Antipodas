function getmap(position) {
	var mapDiv1 = document.getElementById("map");
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var map = new google.maps.Map(mapDiv1, {
		center: {
			lat: latitude, 
			lng: longitude
		},
	zoom: 10
	});
	var mapDiv2 = document.getElementById("map_ant");
	var antipode = {};
	antipode.x = -latitude;
	antipode.y = (longitude + 180) % 180;
	var map2 = new google.maps.Map(mapDiv2, {
		center: {
			lat: antipode.x,
			lng: antipode.y
		},
	zoom: 10
	});
}

function initMap(){
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(getmap);
	}else {
		alert("not supported or permit share your position!")
	}
    
}
