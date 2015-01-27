jQuery("document").ready(function($){
	
		if($( window ).width() <580) {
			$('.media').addClass('media-resized');
		}
		else {
			$('.media').removeClass('media-resized');
		}

	var nav = $('.menu');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5) {
			nav.removeClass("space");
		} else {
			nav.addClass("space");
		}
	});
	

	$( window ).resize(function() {
		if($( window ).width() <770) {
			$('.media').addClass('media-resized1');
		}
		else {
			$('.media').removeClass('media-resized1');
		}		
		if($( window ).width() <580) {
			$('.media').addClass('media-resized2');
			$('.topbar').addClass('topbar-resize');
		}
		else {
			$('.media').removeClass('media-resized2');
			$('.topbar').removeClass('topbar-resize');
		}
	});
	
 
});