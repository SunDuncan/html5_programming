window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandle;
}

function previewHandle() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	fillBackGroundColor(canvas,context);
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var value = selectObj[index].value;
		
	if(value == "squares") {
		for (var squares = 0;squares < 20;++ squares) {
			drawSquare(canvas,context);
		}
	} else if (value == "circles") {
		for (var circles = 0;circles < 20;++ circles) {
			drawCircles(canvas,context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

/**
 * 随机画取方块
 */
function drawSquare(canvas , context) {
	var w = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	
	context.fillStyle = "lightblue";
	context.fillRect(x,y,w,w);
}

/**
 * 用来刷新页面同时覆盖原来的背景色
 */
function fillBackGroundColor(canvas,context) {
	var selectObj = document.getElementById("backcolor");
	var index = selectObj.selectedIndex;
	var value = selectObj[index].value;
	
	context.fillStyle = value;
	context.fillRect(0,0,canvas.width,canvas.height);
	
}

/**
 * 用来画圆
 */
 
 function drawCircles(canvas,context) {
	 var x = Math.floor(Math.random() * canvas.width);
	 var y = Math.floor(Math.random() * canvas.height);
	 var redius = Math.floor(Math.random() * 40);
	 
	 context.beginPath();
	 context.arc(x,y,redius,0,degressToRadians(360),true);
	 context.fillStyle = "lightblue";
	 context.fill();
}

/**
 * 用来添加文字
 */
 function drawText(canvas, context) {
	 var selectObj = document.getElementById("foregroundColor");
	 var index = selectObj.selectedIndex;
	 var value = selectObj[index].value;
	 
	 context.fillStyle = value;
	 context.font = "bold 1em sans-serif";
	 context.textAlign = "left";
	 context.fillText("I saw this tweet", 20, 40);
	 
	 /**
	  * 用来添加微博中的信息
	  */
	
	 selectObj = document.getElementById("tweets"); 
	 index = selectObj.selectedIndex;
	 value = selectObj[index].value;	
	 context.font = "italic 1.2em serif";
	 context.fillText(value, 30, 100);
	 
	 
	 context.font = "bold 1em sans-serif";
	 context.textAlign = "right";
	 context.fillText("and all I got was this lousy t-shirt!", canvas.width - 20, canvas.height - 40);
}
 
function degressToRadians(degress) {
	return (degress * Math.PI)/180;
}

/**
 * 加一个小鸟的图像
 */
 
function drawBird (canvas, context) {
	var bird = new Image();
	bird.src = "twitterBird.png";
	
	bird.onload = function () {
		context.drawImage (bird, 20 , 120, 70, 70);
	}
}