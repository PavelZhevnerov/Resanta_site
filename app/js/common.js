$(function() {	

	/* main-menu */
	var menu = $('.hide-menu');
	$('#sandwich').on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		$('#sandwich').toggleClass("active");
	});
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	/* E-mail Ajax Send */
	$('.popup-form').submit(function() {
		var th = $(this);
		afterTxt = $(th).find('.success');
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(afterTxt).addClass("visible");
			setTimeout(function() {
				th.trigger("reset");
				$(afterTxt).removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	/* Определение формы с которой отправили */
	$('a[href="#callback"]').click(function() {
		var dataForm = $(this).data('form'),
			dataText = $(this).data('text');
		$('.form__title').text(dataText);
		$('.popup-form [name=admin-data]').val(dataForm);
	});

	/* Magnific */
	$(".popup-with-move-anim").magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});

$(window).load(function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

/*-----------------*/

$(document).ready(function () {
	$('.cetificate__wrap-img').magnificPopup({
		type: 'image',
		gallery : {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	})
});

$(document).ready(function(){
	$('.m-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		appendArrows: '.m-slider__nav-btn',
		prevArrow: '<button class="m-slider__btn m-slider__btn_prev" type="button"></button>',
		nextArrow: '<button class="m-slider__btn m-slider__btn_next" type="button"></button>',
		appendDots: '.m-slider__dots',
	});
});

/*-------------*/

$(document).ready(function(){
	$('.goods__section_1 .goods__block').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		/*autoplaySpeed: 5000,*/
		dots: false,
		appendArrows: '.goods__section_1 .goods__slider-nav',
		prevArrow: '<button class="g-slider__btn g-slider__btn_prev" type="button"></button>',
		nextArrow: '<button class="g-slider__btn g-slider__btn_next" type="button"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

/*---------*/
$(document).ready(function(){
	$('.goods__section_2 .goods__block').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		/*autoplaySpeed: 5000,*/
		dots: false,
		appendArrows: '.goods__section_2 .goods__slider-nav',
		prevArrow: '<button class="g-slider__btn g-slider__btn_prev" type="button"></button>',
		nextArrow: '<button class="g-slider__btn g-slider__btn_next" type="button"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

/*---------------*/
$(document).ready(function(){
	$('.goods__section_3 .goods__block').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		/*autoplaySpeed: 5000,*/
		dots: false,
		appendArrows: '.goods__section_3 .goods__slider-nav',
		prevArrow: '<button class="g-slider__btn g-slider__btn_prev" type="button"></button>',
		nextArrow: '<button class="g-slider__btn g-slider__btn_next" type="button"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

/*---------------*/
ymaps.ready(init);
var myMap,
	myPlacemark;

function init() {
	myMap = new ymaps.Map("map", {
		center: [55.92610378, 37.76995330],
		zoom: 17
	});

	myMap.controls
		.remove('geolocationControl')
		.remove('searchControl')
		.remove('routeEditor')
		.remove('trafficControl')
		.remove('fullscreenControl')
		.remove('rulerControl')
		.remove('typeSelector');
	/*.remove('zoomControl');*/

	myMap.controls.get('zoomControl').options.set(
		{
			float: 'none',
			position: {
				right: 10,
				top: 100
			}
		}
	);

	myMap.behaviors.disable([
		/*'drag',*/
		'scrollZoom',
		'dblClickZoom',
		'rightMouseButtonMagnifier',
		'leftMouseButtonMagnifier',
		'ruler',
		'routeEditor'
	]);

	myPlacemark = new ymaps.Placemark(
		[55.92613692, 37.76980444],
		{
			hintContent: 'ул. Воронина, с16',
		},
		{
			preset: 'islands#redDotIcon'
		});

	myMap.geoObjects.add(myPlacemark);
}

/*----------------------------------------------------*/
$(document).ready(function(){
	$('.count__btn_minus').click(function () {
		var $input = $(this).closest('.count').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.count__btn_plus').click(function () {
		var $input = $(this).closest('.count').find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

