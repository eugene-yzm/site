jQuery("document").ready(function($){

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
