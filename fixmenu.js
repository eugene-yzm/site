jQuery("document").ready(function($){

	var scrollVal = 80

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top - scrollVal
	            }, 1000);
	            return false;
	        }
	    }

	});
 	// $(".scroll").click(function(event){
  //        event.preventDefault();
  //        //calculate destination place
  //        var dest=0;
  //        if($(this.hash).offset().top > $(document).height()-$(window).height()){
  //             dest=$(document).height()-$(window).height();
  //        }else{
  //             dest=$(this.hash).offset().top;
  //        }
  //        //go to destination
  //        $('html,body').animate({scrollTop:dest}, 1000,'swing');
  //    });

		if($( window ).width() >900) {
			$('.navbar-right').addClass('topbar1');
		}		
		if($( window ).width() >1500) {
			$('.navbar-right').addClass('topbar2');
			$('.navbar-right').removeClass('topbar1');
		}

		if($( window ).width() >1700) {
			$('.navbar-right').addClass('topbar3');
			$('.navbar-right').removeClass('topbar2');
		}	

		if($( window ).width() >2000) {
			$('.navbar-right').addClass('topbar4');
			$('.navbar-right').removeClass('topbar3');
		}		

		if($( window ).width() <700) {
			$('.navbar-right').removeClass('topbar4');
			$('.middle').addClass('w650');
			$('.topbar').addClass('w631');
		}	

	$(window).resize(function() {
		if($( window ).width() <1600) {
			$('.navbar-right').removeClass('topbar4');
			$('.navbar-right').addClass('topbar3');

			if($( window ).width() <1400) {
				$('.navbar-right').removeClass('topbar3');
				$('.navbar-right').addClass('topbar2');

				if($( window ).width() <700) {
					$('.middle').addClass('w650');
					$('.topbar').addClass('w631');
				}

				if($( window ).width() >700) {
					$('.middle').removeClass('w650');
					$('.topbar').removeClass('w631');
				}		
			}	
			else{
				$('.navbar-right').addClass('topbar3');
				$('.navbar-right').removeClass('topbar2');				
			}			
		}	
		else {
			$('.navbar-right').addClass('topbar4');
			$('.navbar-right').removeClass('topbar3');			
		}
	});
});
