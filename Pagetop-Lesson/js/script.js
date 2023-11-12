$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 3000);
    event.preventDefault();
  });
});