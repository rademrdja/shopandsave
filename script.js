//----------------------- LOADER ---------------------------//

$(window).on('load', function() {
	$('.loader').fadeOut('slow');
	$('.landing-text').addClass('wow');
	$('.landing-text').addClass('animate__animated');
	$('.landing-text').addClass('animate__slideInLeft');
	$('.landing-img').addClass('wow');
	$('.landing-img').addClass('animate__animated');
	$('.landing-img').addClass('animate__slideInRight');
});

//----------------------- NAV ------------------------------//

$(document).ready(function(){
	var width = $(window).width();
	if(width < 800) {
		$("#nav-bar").css("background-color", "transparent");
		return;
	}

	var scroll = $(window).scrollTop();
	if (scroll > 100) {
		$("#nav-bar").addClass("new-nav");
	}

	$(window).scroll(function(){
	  var scroll = $(window).scrollTop();
	  var width = $(window).width();

	  if (scroll > 100) {
		$("#nav-bar").addClass("new-nav");
	  } else{
		$("#nav-bar").removeClass("new-nav"); 	
	  }
	  })
})

$(".toggle").on("click", function() {
	$(".toggle-nav").toggleClass("active");
})

$(".link").on("click", function() {
	$(".toggle-nav").toggleClass("active");
})

new WOW().init();