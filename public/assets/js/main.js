/**
 * check if mobile
 * @returns {Boolean}
 */

$( function(){
	
	$('.owl-carousel-1').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		slideSpeed: 300,
		autoplay: true,
		navText: ["",""],
		dots: false,
		responsive:{
			0:{
				items:1
			}
		}
	});

	$('.owl-carousel-coments2').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		margin:15,
		slideSpeed: 300,
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
		slideSpeed: 300,
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
		slideSpeed: 300,
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
			if (jQuery(this).scrollTop() > 80) {
				$("#barra-fixa ").addClass("active animated fadeInUp");
			};
			if (jQuery(this).scrollTop() < 80) {
				$("#barra-fixa ").addClass("animated fadeInDown");
				$("#barra-fixa ").removeClass("active");
			};
		});
	});

	// jQuery(function (){
	// 	jQuery(window).scroll(function (){
	// 		if (jQuery(this).scrollTop() > 655) {
	// 			$("#o-que-e img").addClass("animated fadeInUp efct-ative");
	// 		};
	// 		if ( $(window).width() > 751) {
	// 			if (jQuery(this).scrollTop() > 500) {
	// 				$("#recursos .box-pd").addClass("animated fadeInUp efct-ative");
	// 			};
	// 		}
	// 		if (jQuery(this).scrollTop() > 1600) {
	// 			$("#atuamos .box").addClass("animated zoomIn efct-ative");
	// 		};
	// 	});
	// });

	// abre - MODAL PORTFOLIO
	$('#calculadora .open-modal').bind('click', function(){
        
		var dataiframe = $(this).attr("data-iframe");
        
		$.ajax({
			url: '/modal-servicos.html',
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
	$(document).on('click', '#modal-palestrante .close-modal',  function(){
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



	// abre - MODAL POLITICA
	$('.politica').bind('click', function(){

		var dataiframe = $(this).attr("data-iframe");

		$.ajax({
			url: '/modal-politica.html',
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

	// abre - MODAL AGENDAR
	$('.agendar-ligacao').bind('click', function(){

		var dataiframe = $(this).attr("data-iframe");

		$.ajax({
			url: '/modal-agendar.html',
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

	// abre - MODAL POLITICA
	$('.termos').bind('click', function(){

		var dataiframe = $(this).attr("data-iframe");

		$.ajax({
			url: '/modal-termos.html',
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


	// abre - MODAL POLITICA
	$('.calc-info').bind('click', function(){

		var dataiframe = $(this).attr("data-iframe");

		$.ajax({
			url: '/modal-calculadora.html',
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


	// fecha - MODAL POLITICA
	$(document).on('click', '#modal-palestrante .close-modal',  function(){
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