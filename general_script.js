// Toggle Animation by Class
$(window).scroll(function(){
  if($(document).scrollTop() > 100){
    $('nav').addClass('animate');
  }else{
    $('nav').removeClass('animate');
  }
});

$(function(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
    console.log("complete");
});