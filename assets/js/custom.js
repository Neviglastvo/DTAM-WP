"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.hamburger').on('click', function (e) {
  e.preventDefault();
  $('.hamburger').toggleClass('active');
  $('.js-nav-mobile').toggleClass('active');
});
$(function () {
  if ($(".js-nav-trigger").length) {
    var objectSelect = $(".js-nav-trigger");
    var scroll = $(window).scrollTop();
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {
      $(".header2").addClass("fixed");
    } else {
      $(".header2").removeClass("fixed");
    }

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > objectPosition) {
        $(".header2").addClass("fixed");
      } else {
        $(".header2").removeClass("fixed");
      }
    });
  }
});

function navMobileLogic() {
  var nav = $('mega-menu');
  var navItem = $('.mega-menu .mega-menu-item');
  var navItemLink = $('.mega-menu .mega-menu-item .mega-menu-link');
  var link = $('.mega-menu-link');
  var list = $('.mega-sub-menu');
  var sublistItem = $('.mega-menu-item');

  if (window.matchMedia('(max-width: 1120px)').matches) {
    navItemLink.on('click', function (event) {
      // event.preventDefault();

      /* Act on the event */
      console.log("Sda");
      list.removeClass('active');
      $(this).next(list).toggleClass('active');
    });
  } // body...

}

navMobileLogic();
$(document).ready(function () {
  function setMinHeight() {
    var target = $('.js-same-height');
    var minHeight = 0;
    $(target).each(function () {
      var currentHeight = $(this).outerHeight();

      if (currentHeight > minHeight) {
        return minHeight = currentHeight;
      }
    });
    $(target).css('height', minHeight);
  }

  $('.js-accordeon-action').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.js-accordeon-item').find('.js-accordeon-action').toggleClass('active');
    $(this).closest('.js-accordeon-item').find('.js-accordeon-action-trigger').slideToggle(600);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(this).closest('.js-accordeon-item').offset().top
    }, 900);
  });

  if ($('.js-what-is-slider').length) {
    $('.js-what-is-slider').slick({
      rows: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      pauseOnFocus: true,
      prevArrow: "<i class='slider-arrow slider-arrow--prev fas fa-angle-left'></i>",
      nextArrow: "<i class='slider-arrow slider-arrow--next fas fa-angle-right'></i>",
      autoplaySpeed: 3000,
      responsive: [{
        breakpoint: 1470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if ($('.js-main-hero-slider').length) {
    $('.js-main-hero-slider').slick({
      rows: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      draggable: false,
      pauseOnFocus: true,
      infinite: true,
      autoplaySpeed: 5000,
      prevArrow: "<i class='slider-arrow slider-arrow--prev fas fa-angle-left'></i>",
      nextArrow: "<i class='slider-arrow slider-arrow--next fas fa-angle-right'></i>"
    });
  }

  if ($('.js-hero-slider').length) {
    $('.js-hero-slider').slick({
      rows: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      pauseOnFocus: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 3000,
      initialSlide: 1,
      responsive: [{
        breakpoint: 1470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableHeight: true
        }
      }, {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableHeight: true
        }
      }]
    });
  }

  if ($('.js-slider-enrollees').length) {
    $('.js-slider-enrollees').slick({
      rows: 0,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      pauseOnFocus: true,
      autoplaySpeed: 3000,
      prevArrow: "<i class='slider-arrow slider-arrow--prev fas fa-angle-left'></i>",
      nextArrow: "<i class='slider-arrow slider-arrow--next fas fa-angle-right'></i>",
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }, {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if ($('.js-slider-lectures').length) {
    $('.js-slider-lectures').slick({
      rows: 0,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      pauseOnFocus: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: "<i class='slider-arrow slider-arrow--prev fas fa-angle-left'></i>",
      nextArrow: "<i class='slider-arrow slider-arrow--next fas fa-angle-right'></i>",
      responsive: [{
        breakpoint: 1720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if ($('.js-events-slider').length) {
    jQuery(function ($) {
      'use strict';

      (function () {
        var _ref;

        var frame = $('.js-events-slider');
        var slidee = frame.children('ul').eq(0);
        var wrap = frame.parent();
        var mySlySliderEvents = new Sly(frame, (_ref = {
          horizontal: 1,
          itemNav: 'basic',
          smart: 0,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBar: wrap.find('.scrollbar'),
          scrollBy: 0,
          clickBar: true,
          dragHandle: true,
          dynamicHandle: true,
          speed: 300,
          elasticBounds: 1
        }, _defineProperty(_ref, "dragHandle", 1), _defineProperty(_ref, "dynamicHandle", 1), _ref)).init();
        $(window).on('resize', function () {
          frame.sly('reload');
        });
      })();
    });
  }

  if ($('.js-news-slider').length) {
    jQuery(function ($) {
      'use strict';

      (function () {
        var _ref2;

        var frame = $('.js-news-slider');
        var slidee = frame.children('ul').eq(0);
        var wrap = frame.parent();
        var mySlySliderNews = new Sly(frame, (_ref2 = {
          horizontal: 1,
          itemNav: 'basic',
          smart: 0,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 6,
          scrollBar: wrap.find('.scrollbar'),
          scrollBy: 0,
          clickBar: true,
          dragHandle: true,
          dynamicHandle: true,
          speed: 300,
          elasticBounds: 1
        }, _defineProperty(_ref2, "dragHandle", 1), _defineProperty(_ref2, "dynamicHandle", 1), _ref2)).init();
        $(window).on('resize', function () {
          frame.sly('reload');
        });
      })();
    });
  }
}); // if ($('#google-map').length) {
//   $(document).ready(function($) {
//     //Местоположение: долгота, широта и коэффициент увеличения
//     var latitude = 50.383874,
//     longitude = 30.470658,
//     map_zoom = 17;
//     //Адрес до иконки с маркером
//     var marker_url = '../img/map/pin.png';
//     var main_color = '', //основной цвет
//       saturation_value= 2, //насыщенность
//       brightness_value= 1; //яркость
//     //Стили для элементов на карте
//     var style= [
//     {
//         //Насыщенность обозначений на карте
//         elementType: 'labels',
//         stylers: [
//         {saturation: saturation_value}
//         ]
//       },
//       { //Скрываем обозначения станций метро, вокзалов, аэропортов и прочих транспортных узов на карте
//       	featureType: 'poi',
//       	elementType: 'labels',
//       	stylers: [
//       	{visibility: 'off'}
//       	]
//       },
//       {
//         //Скрываем обозначение дорог на карте
//         featureType: 'road.highway',
//         elementType: 'labels',
//         stylers: [
//         {visibility: 'off'}
//         ]
//       },
//       {
//         //Скрываем обозначение локальных дорог
//         featureType: 'road.local',
//         elementType: 'labels.icon',
//         stylers: [
//         {visibility: 'off'}
//         ]
//       },
//       {
//         //Скрываем обозначение магистрали на карте
//         featureType: 'road.arterial',
//         elementType: 'labels.icon',
//         stylers: [
//         {visibility: 'off'}
//         ]
//       },
//       {
//         //Скрываем дорожные обозначения на карте
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [
//         {visibility: 'off'}
//         ]
//       },
//       //Стили для разных элементов на карте
//       {
//       	featureType: 'transit',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'poi',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'poi.government',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'poi.sport_complex',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'poi.attraction',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'poi.business',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'transit',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'transit.station',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'landscape',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'road',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'road.highway',
//       	elementType: 'geometry.fill',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       },
//       {
//       	featureType: 'water',
//       	elementType: 'geometry',
//       	stylers: [
//       	{ hue: main_color },
//       	{ visibility: 'on' },
//       	{ lightness: brightness_value },
//       	{ saturation: saturation_value }
//       	]
//       }
//       ];
//     //Создание точки на карте
//     var map_options = {
//     	center: new google.maps.LatLng(latitude, longitude),
//     	zoom: map_zoom,
//     	panControl: false,
//     	zoomControl: false,
//     	mapTypeControl: false,
//     	streetViewControl: false,
//     	mapTypeId: google.maps.MapTypeId.ROADMAP,
//     	scrollwheel: false,
//     	styles: style
//     };
//     //Инициализация карты
//     var map = new google.maps.Map(document.getElementById('google-container'), map_options);
//     //Добавляем свой маркер местонахождения на карту (свою иконку)
//     var marker = new google.maps.Marker({
//     	position: new google.maps.LatLng(latitude, longitude),
//     	map: map,
//     	visible: true,
//     	icon: marker_url,
//     });
//     //Добавляем свои иконки для кнопок увеличить/уменьшить на карту
//     function CustomZoomControl(controlDiv, map) {
//     	var controlUIzoomIn= document.getElementById('zoom-in'),
//     	controlUIzoomOut= document.getElementById('zoom-out');
//     	controlDiv.appendChild(controlUIzoomIn);
//     	controlDiv.appendChild(controlUIzoomOut);
//       //Делаем привязку для кнопок увеличить/уменьшить при клике
//       google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
//       	map.setZoom(map.getZoom()+1);
//       });
//       google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
//       	map.setZoom(map.getZoom()-1);
//       });
//     }
//     var zoomControlDiv = document.createElement('div');
//     var zoomControl = new CustomZoomControl(zoomControlDiv, map);
//     //Помещаем кнопки увеличить/уменьшить на карту в левый верхний угол
//     map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
//   });
// }