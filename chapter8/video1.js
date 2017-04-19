/**
 * 实现电视的列表播放显示
 */
 
 var position = 0;//用来作为指向哪个视屏的指针
 var playlist;    //用来存放电视节目表
 var video;       //用来保存getElementById获取到的video
 
 window.onload = function () {
	 
	 video = document.getElementById("video");
	 playlist = ['video/preroll', 'video/areyoupopular', 'video/destinationearth'];
	 video.addEventListener("ended", nextVideo, false);
	 
	 video.src = playlist[position] + getFormatExtension();
	  alert(video.src);
	 video.load();
	 video.play();
 }
 
 /**
  * 函数用来处理“视频结束”
  */
  
  function nextVideo() {
	  position ++;
	  if (position >= playlist.length) {
		  position = 0;
	  } 
	  
	  video.src = playlist[position] + getFormatExtension();
	  alert(video.src);
	  video.load();
	  video.play();
  }
  
  /**
   * 函数处理各种浏览器支持的格式
   */
   
   function getFormatExtension() {

	   if (video.canPlayType("video/webm") != '') {
		   return ".webm";
	   }
	   
	   if (video.canPlayType("video/mp4") != '') {
		   return ".mp4";
	   }
	   
	   if (video.canPlayType("video/ogg") != '') {
		   return ".ogv";
	   }
   }