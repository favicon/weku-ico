 /*------------------------------*/
/*	Page loader
/*------------------------------*/

 $(window).load(function() {
	$(".loader-item").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	});


/*------------------------------*/
/*	 Scroll Menu BG
/*------------------------------*/

     $(window).scroll(function () {
         if ($("#header").offset().top > 50) {
             $("#header").addClass("menu-bg");
         } else {
             $("#header").removeClass("menu-bg");
         }
     });

	



/*------------------------------*/
/*	 Smooth scroll
/*------------------------------*/


      (function($) { "use strict";
		$(".scroll a[href^='#']").on('click', function(e) {
		   e.preventDefault();
		   var hash = this.hash;
		   $('html, body').stop().animate({
			   scrollTop: $(hash).offset().top}, 2000, 'easeOutExpo');
		});
		 })(jQuery);

		$('.collapse ul li a').click(function(){ 
		$('.navbar-toggle:visible').click();
	   });	


/*------------------------------*/
/*	 Scroll to top
/*------------------------------*/
	 
	$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		}); 
 
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 2000);
			return false;
  });
   

/*------------------------------*/
/*	 Parallax
/*------------------------------*/


	$(window).bind('load', function() {
		if(!onMobile)
		parallaxInit();
	});
	
	function parallaxInit() {
		$('.skills-section').parallax("50%", 0.2);
		$('.cta').parallax("50%", 0.2);
		$('#testimonials').parallax("50%", 0.2);
		
		
	}
		var onMobile = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			onMobile = true;
		}


/*------------------------------*/
/*	 Window Height
/*------------------------------*/


  function fullHeight() {
	windowHeight = $(window).height();
	$('.full-height').css('height', windowHeight);
	};
	
	fullHeight();
	$(window).resize(function() {
		fullHeight();
	});
	
