$(document) .ready(function(){

// Page Intro

  $(window).scroll(function() {
    $('#selling-points').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+250) {
        $(this).addClass("slideUp");
      }
    });
  });

// Landing Albums Animations

    $(window).scroll(function() {
    $('.albums-even').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass("slideLeft");
      }
    });
  });

        $(window).scroll(function() {
    $('.albums-odd').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+300) {
        $(this).addClass("slideRight");
      }
    });
  });

    // Hover Album Flip



});