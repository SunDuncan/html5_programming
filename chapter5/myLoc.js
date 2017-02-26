/***
 * function: 通过浏览器获取到了自己本地的位置
 */

window.onload = getMyLocation;

var watchId = null;
function watchLocation() {
	watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

/**********************************************************清楚跟踪************************************************************ */
function clearWatch() {
	if (watchId) {
		navigator.geolocation.clearWatch(watchId);
		watchId = null;
	}
}
 
//WickedlySmart总部的位置
var ourCoords = {
	latitude: 47.624851,
	longitude: -122.52099	
}

//声明一个全局的地图的变量
var map;

//获取位置
function getMyLocation() {
	if (navigator.geolocation) {
		
		//navigator.geolocation.getCurrentPosition(displayLocation, displayError);
		//获取到你的地址信息
		var watchButton = document.getElementById("watch");
		watchButton.onclick = watchLocation;
		
		//清楚掉你的地址信息
		var clearWatchButton = document.getElementById("clearWatch");
		clearWatchButton.onclick = clearWatch;
		
	} else {
		
		alert("Oops, no geolocation support");
	}
}

//获取地址成功以后，所调用的函数
function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var div = document.getElementById("Location");
	div.innerHTML = "Your are at Latitude: " + latitude + ", Longitude: " + longitude;
	div.innerHTML = " (with " + position.coords.accuracy + " meters accuracy)";
	
	//计算距离部分的代码
	var km = computeDistance(position.coords, ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
	
	//地图
	if(map == null) 
	showMap(position.coords);
	
}


//获取地址失败以后，所调用的函数
function displayError (error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied by user",
		2: "Position is not available",
		3: "Request timed out"
	};
	
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	
	var div = document.getElementById("Location");
	div.innerHTML = errorMessage;
}


//计算两个经纬度之间的距离的成品的代码
function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);
	
	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
		
		alert(distance);
		
		return distance;
}

function degreesToRadians(degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians;
}

//展示地图的函数
function showMap(coords) {

	 var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	
	var mapOptions = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	 var mapDiv = document.getElementById("map");
	 map = new google.maps.Map(mapDiv, mapOptions);
	
	 var title = "Your Location";
	 var content = "You are here: " + coords.latitude + ", " + coords.longitude;
	 addMaker(map, googleLatAndLong, title, content);
}

//加一个大头钉
function addMaker (map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	
	var marker = new google.maps.Marker(markerOptions);
	
	var infoWindowOptions = {
		content: content,
		position: latlong
	};
	
	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	
	google.maps.event.addListener(marker, "click", function () {
		infoWindow.open(map);
	});
}

//编写跟踪的代码
