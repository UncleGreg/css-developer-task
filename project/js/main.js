
// fixed nav
$(function() {
  var header = $(".nav");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    scroll >= 100 ? header.addClass("scrolled") : header.removeClass("scrolled");
  });
});	

// navigation open/close
var menu = $("#js-menu");
var menuButton = $("#js-menu-button");
var overlay = $("#js-menu-overlay");

menuButton.on('click', function() {
  menu.toggleClass("opened");
  menuButton.toggleClass("opened");
  overlay.toggleClass("opened");
});

$("#js-menu li").click(function () {
  menu.removeClass('opened');
  overlay.removeClass('opened');
  menuButton.removeClass('opened');
})

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
	
