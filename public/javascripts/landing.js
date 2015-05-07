$(document) .ready(function(){

  $(window).scroll(function() {
    $('#selling-points').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+150) {
        $(this).addClass("slideUp");
      }
    });
  });


});