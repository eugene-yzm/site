jQuery("document").ready(function($){
	
	var nav = $('.menu');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5) {
			nav.removeClass("space");
		} else {
			nav.removeClass("space");
		}
	});
 
});