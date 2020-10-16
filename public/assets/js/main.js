/**
 * check if mobile
 * @returns {Boolean}
 */

$( function(){
	
	$('.owl-carousel-1').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		autoplay: true,
		navText: ["",""],
		dots: false,
		responsive:{
			0:{
				items:1
			}
		}
	});

	$('.owl-carousel-coments').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		autoplay: true,
		navText: ["",""],
		dots: true,
		dotsData: true,
		responsive:{
			0:{
				items:1
			}
		}
	});

	$('.owl-carousel-2').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		autoplay: true,
		navText: ["",""],
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	jQuery(function (){
		jQuery(window).scroll(function (){
			if (jQuery(this).scrollTop() > 200) {
				$("#o-que-e img").addClass("animated fadeInUp efct-ative");
			};
			if ( $(window).width() > 751) {
				if (jQuery(this).scrollTop() > 500) {
					$("#recursos .box-pd").addClass("animated fadeInUp efct-ative");
				};
			}
			if (jQuery(this).scrollTop() > 1600) {
				$("#atuamos .box").addClass("animated zoomIn efct-ative");
			};
		});
	});

	// abre - MODAL PORTFOLIO
	$('#faq .item').bind('click', function(){
        
		var dataiframe = $(this).attr("data-iframe");
        
		$.ajax({
			url: '/modal.html',
			success: function (row){
				$('#modal-load').html( row )
				$(".iframe").append(dataiframe);
			
				$('body').addClass('no-scroll');
				$('#modal-palestrante').addClass('animated fadeIn').show(0);
				setTimeout(function(){
					$('#modal-palestrante .content-modal').addClass('animated slideInUp').show(0);
				}, 200);

			}
		})

	});

	// fecha - MODAL PORTFOLIO
	$(document).on('click', '#modal-palestrante #close',  function(){
		$('#modal-palestrante .content-modal').removeClass('slideInUp').addClass('slideOutDown');
		setTimeout(function(){
			$('#modal-palestrante .content-modal').hide(0).removeClass('animated slideOutDown');
			$('#modal-palestrante').removeClass('fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('#modal-palestrante').hide(0).removeClass('animated fadeOut');
				$('body').removeClass('no-scroll');
			}, 200);
		}, 200);
	});



});

$(document).on('click','.button-faq', function() {
	$(this).next('.text').toggleClass('active');
	$(this).toggleClass('active');
});