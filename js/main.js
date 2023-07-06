window.jQuery(document).ready(function($){

	'use strict';

	// Script for Header Background - Height 100% //
	if ($(document).width() >= 769) {
		$(window).on("resize", function () {
			if ($(window).width() < 769) {
				$('.header-content').height("auto");  // Mobile version size "auto"
			}
			else {
				var height = $(window).height();        //Get the height of the browser window
				$('.header-content').height(height - 200);  //Resize the videocontainer div, with a size of 64 - page height.
			}
		}).resize();
	} else {
	}
	// End Script for Header Background - Height 100% //
	// jQuery smooth scrolling //
	// $('a[href*="#"]').on('click',function(e) {
	// 	e.preventDefault();
	// 	var target = this.hash;
	// 	var $target = $(target);
	// 	$('html, body').stop().animate({
	// 		'scrollTop': $target.offset().top
	// 	}, 900, 'swing', function () {
	// 		window.location.hash = target;
	// 	});
	// });
	// End jQuery smooth scrolling //


	// Scroll to top button
	jQuery(document).ready(function($) {

		// browser window scroll (in pixels) after which the "back to top" link is shown
		var offset = 300,
			//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
			offset_opacity = 1200,
			//duration of the top scrolling animation (in ms)
			scroll_top_duration = 700,
			//grab the "back to top" link
			$back_to_top = $('.cd-top');

		//hide or show the "back to top" link
		$(window).scroll(function() {
			($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if ($(this).scrollTop() > offset_opacity) {
				$back_to_top.addClass('cd-fade-out');
			}
		});

		//smooth scroll to top
		$back_to_top.on('click', function(event) {
			event.preventDefault();
			$('body,html').animate({
					scrollTop: 0,
				}, scroll_top_duration
			);
		});

	});
	// End Scroll to top


	// Navigation menu scrollspy to anchor section //
	$('body').scrollspy({
		target: '#navigation .navbar-collapse',
		offset: parseInt($('#navigation').height(), 0)
	});
	// End navigation menu scrollspy to anchor section //


	// sticky-menu on scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#header").removeClass("sticky-menu");
		} else {
			$("#header").addClass("sticky-menu");
		}
	});
	// End sticky-menu on scroll


	/* magnificPopup image view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	/* End magnificPopup image view */


	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe',
		gallery: {
			enabled: true
		}
	});
	/* End magnificPopup video view */


	// jQuery tooltips //
	$('.btn-tooltip').tooltip();
	$('.btn-popover').popover();
	// End jQuery tooltips //


	// Team Slider Slick
	$('.carousel-slider.gallery-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: true,
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 1,
					draggable: true
				}
			},
			{
		  breakpoint: 767,
		  settings: {
		    slidesToShow: 1,
		    draggable: true
			}

		}
		]
	});
	// End Team Slider Slick

	// Students Review Slider Slick
	$('.carousel-slider.general-slider').each(function() {
		$(this).slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			draggable: true,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					draggable: true
				}
			}]
		});
	});
	// End Students Review Slider Slick


	// Preview images popup gallery with Fancybox //
	$('.fancybox').fancybox({
		loop: false
	});
	// End Preview images popup gallery with Fancybox //



	// Counter animation //
	$('.themeioan_counter > h4').counterUp ({
		delay: 10,
		time: 3000
	});
	// End Counter animation //


	// Navigation Burger animation //
	$('.burger-icon').on('click touchstart', function(e) {
		$(this).toggleClass('change');
		$("#navbarCollapse").slideToggle();
		e.preventDefault();
	});
	// END Navigation Burger animation //

});


// testimonial strts //

		$(document).ready(function() {

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
        autoplay :true,
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});
// testimonial ends//