
// fixed nav
$(function() {
  var header = $(".nav");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    scroll >= 100 ? header.addClass("scrolled") : header.removeClass("scrolled");
  });
});	

// navigation open/close
$("#js-menu-button").on('click', function() {
  var menu = $("#js-menu");
  var button = $("#js-menu-button");
  var overlay = $("#js-menu-overlay");

  menu.toggleClass("opened");
  button.toggleClass("opened");
  overlay.toggleClass("opened");

});

//smooth scroll
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    300,
  )
})
	
