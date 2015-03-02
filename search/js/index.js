// Concept by JMD Designs/James Martin-Davies 
// Nothing spectacular going on here, just some basic jQuery/Javascript. Thank you to everyone for the forking!

  $.backstretch([
      "http://db.tt/Ls70GJc8"
    , "http://db.tt/Bjow1L0I"
    , "http://db.tt/RUwG7CH8"
  ], {duration: 3000, fade: 1500});

$(function() {
	
	var btn = $(".button-wrapper");
	var input = $("input[type=text]")
		
	input.focus(function() {
		btn.removeClass("fadeOutLeft");
		btn.addClass("animated fadeInDown");
		btn.fadeIn();
	});
	
	input.focusout(function() {
		btn.removeClass("fadeInDown");
		btn.addClass("fadeOutLeft");
		btn.fadeOut(800);
	});
  
  var bstr = $(".backstretch");
	
	$("#switch").on('click', function() {		
		bstr.fadeToggle(600);
    
	});
  
  var wrap = $(".wrapimg");

	$("#switch2").on('click', function() {		
		wrap.fadeToggle(600);
	});
}); 