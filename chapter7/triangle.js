window.onload = function() {
	var canvas = document.getElementById("triangle");
	var context = canvas.getContext("2d");
	context.beginPath();
	context.moveTo(100,150);
	context.lineTo(250,25);
	context.lineTo(300,90);
	context.closePath();
	context.lineWidth = 5;
	context.stroke();
	context.fillStyle = "red";
	context.fill();
}