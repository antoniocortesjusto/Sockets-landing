function resizeFrame(){
  //Strating point, get all vertical and font sizes and resize them as the screen change its height
  var myHeight= 732;
  var minHeight = 400;
  var windowHeight = $(window).height();
  if (windowHeight < minHeight){
    windowHeight = minHeight;
  }
  var resizeFactor = windowHeight/myHeight;

  function toPixels(value){
    return (value * resizeFactor).toString() + "px";
  }

  function toCssStyle(arrayStyles){
    var obj = {}
    for (var i = 0; i < arrayStyles.length; i+=2) {
      obj[arrayStyles[i]] = toPixels(arrayStyles[i+1]);
    }

    return obj
  }

  // $("#third-frame").height(498*resizeFactor);
  // $("#third-frame").css('margin-top', toPixels(-10));
  // $("#third-frame").css('min-height', toPixels(300));

  $("#third-frame").css(toCssStyle(['height', 498, 'margin-top', -10, 'min-height', 300]));

  // $(".video-container").height(428*resizeFactor);
  // $(".video-container").css('margin-top', toPixels(40));
  // $(".video-container").css('margin-bottom', toPixels(30));

  $(".video-container").css(toCssStyle(['height', 428, 'margin-top', 40, 'margin-bottom', 30]));


  // $("iframe").css('height', toPixels(394));
  // $("iframe").css('width', toPixels(700));

  $("iframe").css(toCssStyle(['height', 394, 'width', 700]));

  //$("#video-p").css(toCssStyle([,"margin-bottom:" + toPixels(10) + ";height:" + toPixels(20));

  $("#video-p").css(toCssStyle(['margin-bottom', 10, 'height', 20]));

  $(".subscribe-frame").css(toCssStyle(["min-height", 200]));

  $(".subscribe-h2").css(toCssStyle(["height", 33, "margin-top", 20, "margin-bottom" , 20, "font-size", 30]));

  $(".subscribe-h4").css(toCssStyle(["height", 38, "margin-top", 10,"margin-bottom", 10, "font-size",18]));

  $("form").css(toCssStyle(["height", 54, "padding-top", 20]));

  $("#MERGE0").css(toCssStyle(["height", 34, 'padding-top', 6, 'padding-right', 12, 'padding-bottom', 6,
                             'padding-left', 12, "font-size", 14]));

  $("#false-subscribe").css(toCssStyle(["height", 34, 'padding-top', 6, 'padding-right', 12, 'padding-bottom', 6,
                                      'padding-left', 12, "font-size", 14]));

  $("#foot-frame").css(toCssStyle(["margin-top", -10, "margin-bottom", 10, "height", 45]));

  $(".social-icon").css(toCssStyle(["height", 35, "margin-top" , 10]));

  //$("#second-frame").css(toCssStyle([,'height:' + );

  //$("").css(toCssStyle([,);
}

$(document).ready(resizeFrame);

$(window).resize(resizeFrame);