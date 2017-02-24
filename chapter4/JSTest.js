function init() {
	var button = document.getElementById('DOGS');
	button.onclick = bark;
}

window.onload = init;

function bark() {
	var name = document.getElementById("Name");
	var dogName = name.value;
	var bark = dogName + " is shouting!";
	alert(bark);
}

