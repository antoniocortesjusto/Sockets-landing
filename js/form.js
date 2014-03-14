setTimeout(function() {
  document.getElementById("wrong_mail").style.display="none";
}, 0);

// Code from http://maurizio-franco.blogspot.com.es/2012/02/bind-or-unbind-html-form-to-enter-key.html
// Unbind enter key press with submition form
$(document).ready(function(){ 
    $("#subscribe-form").bind("keypress", function(e) {
        if (e.keyCode == 13) {
            return false;
        }
    });
}); 

// Bind enter key press with our button
// Any key press to hide the warning
$(document).ready(function(){ 
    $("#subscribe-form").bind("keydown", function(e) {
        if (e.keyCode == 13) {
            $("button#false-subscribe").trigger("click");
            return false;
        } else if (e.keyCode != 13){
            // Hide the warning
            console.log(e.keyCode);
            $("div#wrong_mail").hide(2000);
        }
    });
}); 


function checkMail(){
  var mail = $("input.form-control").val();

  // Find the chars needed to be well-written address
  var attr = mail.indexOf("@");
  var attr2 = mail.indexOf("@",attr+1);
  var dot = mail.indexOf(".",attr+2);
  var dot2 = dot;
  // Find the last dot  
  while(dot2 != -1) {
    dot2 = mail.indexOf(".",dot+1);
    if(dot2 != -1 ){
      dot = dot2;
    }
  }
  var subMail = mail.substring(dot+1).length;
  
  // If the address is correct submit 
  if (attr > 0 && attr2 == -1 && dot != -1 && subMail > 0){
    // It seems the page is stuck, button stayed pressed
    $("input.form-control").trigger("focus");
    // Submit
    $("button#subscribe").trigger("click");
  } else {
    $("div#wrong_mail").show();
    
    // Set input value to empty string
    //$("input.form-control").val("");
    
    $("input.form-control").trigger("focus");
    
    // Make the warning to auto remove after 3 seconds
    // setTimeout(function() {
    //   $("div#wrong_mail").hide(1000);
    // }, 3000);
  }
}
