function resizeFrame(){
  //Strating point, get all vertical and font sizes and resize them as the screen change its height
  var myHeight= 732;
  var minHeight = 600;
  var windowHeight = $(window).height();

  //console.log(windowHeight);

  if (windowHeight < minHeight){
    windowHeight = minHeight;
  }
  var resizeFactor = windowHeight/myHeight;

  //console.log(windowHeight);
  //console.log(resizeFactor);


  function toPixels(value){
    return (value).toString() + "px";
  }

  function toCssStyle(arrayStyles){
    var obj = {}
    for (var i = 0; i < arrayStyles.length; i+=2) {
      obj[arrayStyles[i]] = toPixels(arrayStyles[i+1]);
    }

    return obj
  }

  $("#third-frame").css(toCssStyle(['height', 498 * resizeFactor, 'margin-top', -10 * resizeFactor,
                                    'min-height', 300 * resizeFactor]));

  $(".video-container").css(toCssStyle(['height', 428 * resizeFactor, 'margin-top', 40 * resizeFactor,
                                        'margin-bottom', 30 * resizeFactor]));

  $("iframe").css(toCssStyle(['height', 394 * resizeFactor, 'width', 700 * resizeFactor]));

  $("#video-p").css(toCssStyle(['margin-bottom', 10 * resizeFactor, 'height', 20 * resizeFactor]));

  $(".subscribe-frame").css(toCssStyle(["min-height", 200 * resizeFactor]));

  $(".subscribe-h2").css(toCssStyle(["height", 33 * resizeFactor, "margin-top", 20 * resizeFactor,
                                     "margin-bottom" , 20 * resizeFactor, "font-size", 30 * resizeFactor]));

  $(".subscribe-h4").css(toCssStyle(["height", 38 * resizeFactor, "margin-top", 10 * resizeFactor,
                                     "margin-bottom", 10 * resizeFactor, "font-size", 18 * resizeFactor]));

  $("form").css(toCssStyle(["height", 54, "padding-top", 20]));

  $("#MERGE0").css(toCssStyle(["height", 34 * resizeFactor * resizeFactor, 'padding-top', 6 * resizeFactor,
                               'padding-right', 12 * resizeFactor, 'padding-bottom', 6 * resizeFactor,
                               'padding-left', 12 * resizeFactor, "font-size", 14 * resizeFactor]));

  $("#false-subscribe").css(toCssStyle(["height", 34 * resizeFactor, 'padding-top', 6 * resizeFactor,
                                        'padding-right', 12 * resizeFactor, 'padding-bottom', 6 * resizeFactor,
                                        'padding-left', 12 * resizeFactor, "font-size", 14 * resizeFactor]));

  $("#foot-frame").css(toCssStyle(["margin-top", -10 * resizeFactor, "margin-bottom", 10 * resizeFactor,
                                   "height", 45 * resizeFactor]));

  $(".social-icon").css(toCssStyle(["height", 35 * resizeFactor, "margin-top" , 10 * resizeFactor]));

  $("#alert_message").css(toCssStyle(['font-size', 30 * resizeFactor, 'margin-top', 20 * resizeFactor,
                                      'margin-bottom', 10 * resizeFactor]));

  $("#main-frame").css({'height': toPixels(windowHeight), 'min-height': toPixels(windowHeight)});

}

//alert($(window).height());

$(document).ready(resizeFrame);
$(window).resize(resizeFrame);