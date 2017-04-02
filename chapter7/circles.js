window.onload = function() {
	var canvas = document.getElementById("circles");
	var context = canvas.getContext("2d");
	drawSimleFace(canvas, context);
	
}

function drawSimleFace(canvas, context) {
	context.beginPath();
	context.arc(300, 300, 200, 0, 2 * Math.PI, true);
	context.fillStyle = "#ffffcc";
	context.fill();
	context.stroke();
	
	context.beginPath();
	context.arc(200, 250, 25, 0, 2 * Math.PI, true);
	context.stroke();
	
	context.beginPath();
	context.arc(400, 250, 25, 0, 2 * Math.PI, true);
	context.stroke();
	
	context.beginPath();
	context.moveTo(300, 300);
	context.lineTo(300, 350);
	context.stroke();
	context.closePath();
	
	context.beginPath();
	context.arc(300, 350, 75, 20 * Math.PI / 180, 160 * Math.PI / 180, false);
	context.stroke();
}

