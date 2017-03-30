window.onload = function () {
	setInterval(handleRefresh,3000);

}

/**
 * 创建一个新的script元素
 */
 
 function handleRefresh() {
	 var url = "http://gumball.wickedlysmart.com?callback=updateSales" + "&lastreporttime=" + lastReportTime +"&random=" + (new Date()).getTime();
	 
	 var newScriptElement = document.createElement("script");
	 newScriptElement.setAttribute("id","jsonp");
	 newScriptElement.setAttribute("src", url);
	 
	 	 
	 var oldScriptElement = document.getElementById("jsonp");
		 
	 var head = document.getElementsByTagName("head")[0];//获取head的标签
	 	 
	 if (oldScriptElement == null) {
		 
		 head.appendChild(newScriptElement);
	 } else {
		 
		 head.replaceChild(newScriptElement,oldScriptElement);
	 }
 }
 
 /**
  * 在div的sales下面添加表格
  */
  
  var lastReportTime = 0;
  function updateSales(sales) {
	 
	  var salesDiv = document.getElementById("sales");
	  for(var i = 0;i < sales.length; i++) {
		  var sale = sales[i];
		  var div = document.createElement("div");
		  div.setAttribute("class", "saleItem");
		  div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		  salesDiv.appendChild(div);
	  }
	  
	  if (sales.length > 0) {
		  lastReportTime =  sales[sales.length-1].time;
	  }
   }
