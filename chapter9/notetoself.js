/**
 * localStorage所能用的API
 * sessionStorage同样适用
 */

/**
 * 通过本地存储实现记事本的作用
 */
window.onload = init;

function init() {

	var button = document.getElementById("add_button");
	button.onclick = createSticky;

	var stickiesArray = getStickiesArray();

	for (var i = 0; i < stickiesArray.length; ++i) {
		var key = stickiesArray[i];
		var value = JSON.parse(localStorage[key]);
		addStickyToDom(key, value);
	}
}

/**
 * 删除所有的web本地存贮
 */
function deleteAllSticky() {
	localStorage.clear();
	var stickies = document.getElementById("stickies");
	var sticky = document.getElementsByName("li");
	stickies.removeChild(sticky[0]);

}
 
/**
 *响应添加按钮以后的处理函数 
 */
function createSticky() {
	
	/**
	 * 唯一的key键
	 */
	var date = new Date();
	var time = date.getTime();
	var key = "sticky_" + time;
	
	/**
	 * 颜色的控制
	 */
	var colorSelectObj = document.getElementById("note_color");
	var index = colorSelectObj.selectedIndex;
	var color = colorSelectObj[index].value;

	var value = document.getElementById("note_text").value;
	
	/**
	 * 构造对象中包含颜色和键值
	 */
	var stickyObj = {
		"value": value,
		"color": color
	}

	localStorage.setItem(key, JSON.stringify(stickyObj));

	var stickiesArray = getStickiesArray();
	stickiesArray.push(key);
	localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	addStickyToDom(key, stickyObj);
}
 
/**
 * 增加笔记到页面
 */

function addStickyToDom(key, stickyObj) {
	var stickies = document.getElementById("stickies");
	var sticky = document.createElement("li");
	sticky.setAttribute("id", key);
	sticky.style.backgroundColor = stickyObj.color;
	var span = document.createElement("span");
	span.setAttribute("class", "sticky");
	span.innerHTML = stickyObj.value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);
	sticky.onclick = deleteSticky;

}
 
/**
 * 获得web内存的数组
 */
function getStickiesArray() {
	var stickiesArray = localStorage.getItem("stickiesArray");

	if (!stickiesArray) {
		stickiesArray = [];
		localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	} else {
		stickiesArray = JSON.parse(stickiesArray);
	}

	return stickiesArray;
}
  
/**
 * 删除所选的标签函数
 */

function deleteSticky(e) {
	   var key = e.target.id;
	   if (e.target.tagName.toLowerCase() == "span") {
		key = e.target.parentNode.id;
	   }

	   localStorage.removeItem(key);

	   var stickiesArray = getStickiesArray();

	   if (stickiesArray) {
		for (var i = 0; i < stickiesArray.length; ++i) {
			if (key == stickiesArray[i]) {
				stickiesArray.splice(i, 1);
			}
		}
		localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	   }

	   removeStickyFromDOM(key);
}
   
/**
 * 删除即时贴
 */
function removeStickyFromDOM(key) {
	var sticky = document.getElementById(key);
	sticky.parentNode.removeChild(sticky);
}
	

 