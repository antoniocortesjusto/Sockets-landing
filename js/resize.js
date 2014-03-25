$(document).ready(function(){
	var myHeight= 726;
	var minHeight = 600;
	var windowHeight = $(window).height();
	if (windowHeight < minHeight){
		windowHeight = minHeight;
	}
	var resizeFactor = windowHeight/myHeight;

	function toPixels(value){
		return (value * resizeFactor).toString() + "px";
	}

	$("#third-frame").height(498*resizeFactor);
	$("#third-frame").css('margin-top', toPixels(-10));
	$("#third-frame").css('min-height', toPixels(300));

	$(".video-container").height(428*resizeFactor);
	$(".video-container").css('margin-top', toPixels(40));
	$(".video-container").css('margin-bottom', toPixels(30));

	$("iframe").css('height', toPixels(394));
	$("iframe").css('width', toPixels(700));

	$("#video-p").attr('style',"margin-bottom:" + toPixels(10) + ";height:" + toPixels(20));

	$(".subscribe-frame").attr('style', "height:" + toPixels(200) + ";min-height:" + toPixels(200));
	$(".subscribe-h2").attr('style', "height:" + toPixels(33) + ";margin-top:" 
		                            + toPixels(20) +";margin-bottom:" + toPixels(20) 
		                            + ";font-size:" + toPixels(30));
	$(".subscribe-h4").attr('style', "height:" + toPixels(38) + ";margin-top:" 
		                            + toPixels(10) +";margin-bottom:" + toPixels(10) 
		                            + ";font-size:" + toPixels(18));
	$("form").attr('style', "height:" + toPixels(54) + ";padding-top:" 
		                            + toPixels(20));
	$("#MERGE0").attr('style', "height:" + toPixels(34) + ";padding:" + toPixels(6) + " " + toPixels(12) 
		                            + ";font-size:" + toPixels(14));
	$("#false-subscribe").attr('style', "height:" + toPixels(34) + ";padding:" + toPixels(6) + " " + toPixels(12) 
		                            + ";font-size:" + toPixels(14));

	$("#foot-frame").attr('style', "margin-top:" + toPixels(-10) + ";margin-bottom:" + toPixels(10) 
		                         + ";height:" + toPixels(45));
	$(".social-icon").attr('style', "height:" + toPixels(35) + ";margin-top:" + toPixels(10));

});