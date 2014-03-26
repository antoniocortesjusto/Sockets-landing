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

  //$(".white-frame").css(toCssStyle(['min-height', 732]));

  $(".logo-div").css(toCssStyle(['top', 10]));

  $(".description-div").css(toCssStyle(['top', 110]));

  $(".button-div").css(toCssStyle(['top', 297, 'margin-top', 150]));

  $("#second-frame").css({'height': toPixels(windowHeight)});

  $(".blue-frame").css(toCssStyle(['min-height', 732]));

  $("#feature-title-row").css(toCssStyle(['padding-bottom', 50]));

  $(".feature-row").css(toCssStyle(['padding-bottom', 50]));

  $(".feature-icon").css(toCssStyle(['font-size', 80, 'margin-top', 23]));

  $(".logo").css(toCssStyle(['height', 80, 'margin-bottom', 20]));

  $(".division").css(toCssStyle(['height', 50]));

  $(".logo-text").css(toCssStyle(['font-size', 48, 'margin-top', 10]));

  $("h2").css(toCssStyle(['font-size', 30]));

  $("h4").css(toCssStyle(['font-size', 18]));

  $("h5").css(toCssStyle(['font-size', 14]));

  $(".btn-sockets").css(toCssStyle(['padding-top', 10, 'padding-right', 16, 'padding-bottom', 10,
                                    'padding-left', 16, 'font-size', 18]));

  $("#main-frame").css({'height': toPixels(windowHeight)});

  //$("").css(toCssStyle([]))
}

//alert($(window).height());

$(document).ready(resizeFrame);

$(window).resize(resizeFrame);