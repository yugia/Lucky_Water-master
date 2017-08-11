$(document).ready(function() {

// jQuery code inserted here
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-100
        }, 1000);
        return false;
      }
    }
  });

$('.enlarge').click(function() {
  $(this).toggleClass('active');
});

   $(".burger-button, .burger-menu a").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });

   $('.effect-chico').bind('touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });

// more jQuerry codes here

});
