// Toggle Animation by Class
$(window).scroll(function(){
  if($(document).scrollTop() > 100){
    $('nav').addClass('animate');
  }else{
    $('nav').removeClass('animate');
  }
});

$(function(){
    $("#includedContent").load("index.html");
    console.log("complete");
});