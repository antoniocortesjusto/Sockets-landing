// Code from http://maurizio-franco.blogspot.com.es/2012/02/bind-or-unbind-html-form-to-enter-key.html
// Unbind not needed is not submit button
// Bind enter key press with our button
// Any key press to hide the warning
$(document).ready(function(){ 
    $("#subscribe-form").bind("keydown", function(e) {
        if (e.keyCode == 13) {
            // direct call to check mail
            checkMail();
            return false;
        } else {
            // Hide the warning
            $("div#wrong_mail").slideUp(2000);
        }
    });
});


function checkMail(){
  var mail = $("input.form-control").val();

  // regular expressions
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // If the address is correct submit 
  if (re.test(mail)){
    // It seems the page is stuck, button stayed pressed
    $("input.form-control").trigger("focus");
    // Submit
    $("form#subscribe-form").submit();
  } else {
    $("div#wrong_mail").show();
    $("input.form-control").trigger("focus");
  }
}

