function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;//获取按钮的事件
	loadPlaylist();	
}
window.onload = init;

function handleButtonClick() {
	var getSongName = document.getElementById("add");
	var songName = getSongName.value;//获取到输入框中的词
	
	var li = document.createElement("li");//创建一个新的元素
	li.innerHTML = songName;//将获取到的输入框中的词放入这个li元素中
	var ul = document.getElementById("playlist");//获取需要增加孩子元素的父节点
	ul.appendChild(li); 
	save(songName);			
}
