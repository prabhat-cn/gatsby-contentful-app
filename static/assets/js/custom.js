(function ($, window, Typist) {
    
	
	// Dropdown Menu Fade    
	jQuery(document).ready(function(){
		$(".dropdown").hover(
			function() { $('.dropdown-menu', this).fadeIn("fast");
			},
			function() { $('.dropdown-menu', this).fadeOut("fast");
		});
	});
	
	/*-------active---------*/
	
	$(document).ready(function() {
		$(".nav-link").click(function () {
			$(".nav-link").removeClass("active");
			$(this).addClass("active");   
		});
	});
/*-------------headder_fixed-------------*/
	
	
$(window).scroll(function(){
	var sticky = $('.header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 20) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});

/*--------------ASO.JS---------------*/
	
  AOS.init();
		
 //refresh animations
 
  $(window).on('load', function() {
  	AOS.refresh();
  });


/*------------slider_sw------------*/

var swiper = new Swiper(".swiper_testimonial", {
	slidesPerView: 1,
	spaceBetween: 20,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		//dynamicBullets: true,
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
  });

  var swiper = new Swiper(".swiper_blog_list", {
	// slidesPerView: 4,
	//spaceBetween: 20,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		360: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		640: {
		  slidesPerView: 1,
		  spaceBetween: 0,
		},
		768: {
		  slidesPerView: 2,
		  spaceBetween: 0,
		},
		1024: {
		  slidesPerView: 3,
		  spaceBetween: 0,
		},
	  },
  });

  var swiper = new Swiper(".video_gallery", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".video_gallery2", {
	spaceBetween: 10,
	thumbs: {
	  swiper: swiper,
	},
  });

  /*------------Scroll_top--------------*/


  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

})(jQuery, window);

function scrollToBottom() {
	$(".drop_scroll").animate({ scrollTop: $(".drop_scroll")[0].scrollHeight }, 1000);
}


