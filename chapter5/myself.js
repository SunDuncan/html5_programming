window.onload = getMyLocation;

function getMyLocation() {
	
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition(displayLocation);
				
	} else {
		alert("没有获取到你的位置信息");
	}
}

/***************************展示位置信息的函数******************************* */
function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert(latitude);
	var div = document.getElementById("Location");
	div.innerHTML = "Your Location is latitude: " + latitude + "  longitude: " + longitude; 
}