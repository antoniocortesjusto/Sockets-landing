setTimeout(function() {
  document.getElementById("wrong_mail").style.display="none";
}, 0);


function checkMail(){
  var mail = $("input.form-control").val();

  //find the chars needed to be well-written address
  var attr = mail.indexOf("@");
  var attr2 = mail.indexOf("@",attr+1);
  var dot = mail.indexOf(".",attr+2);
  var dot2 = dot;
  //find the last dot  
  while(dot2 != -1) {
    dot2 = mail.indexOf(".",dot+1);
    if(dot2 != -1 ){
      dot = dot2;
    }
  }
  var subMail = mail.substring(dot+1).length;
  
  //if the address is correct submit 
  if (attr > 0 && attr2 == -1 && dot != -1 && subMail > 0){
    //it seems the page is stuck, button stayed pressed
    $("input.form-control").trigger("focus");
    //submit
    $("button#suscribe").trigger("click");
  } else {
    $("div#wrong_mail").show();
    $("input.form-control").val("");
    $("input.form-control").trigger("focus");
    setTimeout(function() {
      $("div#wrong_mail").hide(1000);
    }, 3000);
    
  }

  console.log(attr);
  console.log(attr2);
  console.log(dot);
  console.log(subMail);
}

