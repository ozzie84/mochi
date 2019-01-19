"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
  }); // Tilt js

  $('.global_btn').tilt({
    scale: 1.05
  }); // Page scroll to ID

  $("a[href*='#']").mPageScroll2id({
    autoScrollSpeed: true
  }); // Welcome slider

  var swiperWelcome = new Swiper('.welcome_slider_wrap .swiper-container', {
    speed: 1200,
    loop: true,
    loopedSlides: 5,
    parallax: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  var swiperProduct = new Swiper('.products_item__v2 .swiper-container', {
    speed: 1200,
    loop: true,
    loopedSlides: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  var swiperBanner = new Swiper('.banner_slider .swiper-container', {
    speed: 1200,
    spaceBetween: 30,
    slidesPerView: 7,
    slidesPerColumn: 2,
    breakpoints: {
      1200: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 4
      },
      767: {
        slidesPerView: 3.7,
        slidesPerColumn: 1,
        spaceBetween: 15
      }
    }
  }); // Click on select with hidden radio-btn

  $(document).on('click', '.btn_select', function (event) {
    event.preventDefault();
    $(this).parent().parent().find('.btn_select__active').removeClass('btn_select__active');
    $(this).addClass('btn_select__active');

    if ($(this).hasClass('btn_select__active')) {
      $(this).parent().parent().find('input[checked="checked"]').removeAttr('checked');
      $(this).next().attr('checked', true);
    }
  }); // Buttons plus and minus

  function counter(min, max) {
    $(document).on('click', '.btn_counter .plus', function (event) {
      event.preventDefault();
      var output = $(this).prev();

      if (output.val() < max) {
        output.val(parseInt(output.val()) + 1);
        console.log(output.val());
      } else {
        output.val(parseInt(output.val()));
      }
    }).on('click', '.btn_counter .minus', function (event) {
      event.preventDefault();
      var output = $(this).next();

      if (output.val() == min) {
        output.val(parseInt(output.val()));
      } else {
        output.val(parseInt(output.val()) - 1);
        console.log(output.val());
      }
    });
  }

  counter(1, 100);
  $(window).on('resize load', function () {
    if ($(window).outerWidth() < 576) {
      $('.test').addClass('order-first');
    } else {
      $('.test').removeClass('order-first');
    }
  });
  $(document).on('focusin', '.cart_details__input', function () {
    $(this).prev().addClass('input_active');
  });
  $(document).on('focusout', '.cart_details__input', function () {
    console.log($(this).val());

    if ($(this).val() === '') {
      $(this).prev().removeClass('input_active');
    }
  });
  $('#phone').mask('+00 000 000-00-00');
  $('#card').mask('0000 0000 0000 0000'); // Cart click animation

  $(document).on('click', '.btn_cart, .cart_mobile', function () {
    $('html, body').addClass('overflow_global');
    anime({
      targets: '.cart_step1',
      translateX: -388,
      delay: 200,
      duration: 200,
      easing: 'easeInSine'
    });
    anime({
      targets: '.cart_overlay',
      width: '100vw',
      delay: 200,
      duration: 200,
      easing: 'easeInBack'
    });
  }).on('click', '.close1', function () {
    $('html, body').removeClass('overflow_global');
    anime({
      targets: '.cart_step1',
      translateX: 290,
      duration: 200,
      delay: 200,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_overlay',
      width: 0,
      delay: 0,
      duration: 200,
      easing: 'easeInBack'
    });
  }).on('click', '.step2', function () {
    anime({
      targets: '.cart_step2',
      translateY: '-100%',
      delay: 200,
      duration: 400,
      easing: 'easeInSine'
    });
    anime({
      targets: '.cart_overlay2',
      height: '100vh',
      delay: 350,
      duration: 300,
      easing: 'easeInBack'
    });
  }).on('click', '.cart_overlay2', function () {
    anime({
      targets: '.cart_step2',
      translateY: '100%',
      duration: 200,
      delay: 200,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_overlay2',
      height: 0,
      delay: 0,
      duration: 200,
      easing: 'easeInBack'
    });
  }).on('click', '.step_location', function () {
    anime({
      targets: '.cart_step3',
      translateX: '-100%',
      delay: 200,
      duration: 400,
      easing: 'easeInSine'
    });
  }).on('click', '.close2', function () {
    anime({
      targets: '.cart_step3',
      translateX: '100%',
      delay: 300,
      duration: 400,
      easing: 'easeOutSine'
    });
  }).on('click', '.step_payment', function () {
    anime({
      targets: '.cart_step4',
      translateY: '-100%',
      delay: 200,
      duration: 400,
      easing: 'easeInSine'
    });
    anime({
      targets: '.cart_overlay4',
      height: '100vh',
      delay: 350,
      duration: 300,
      easing: 'easeInBack'
    });
  }).on('click', '.cart_overlay4', function () {
    anime({
      targets: '.cart_step4',
      translateY: '100%',
      duration: 200,
      delay: 200,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_overlay4',
      height: 0,
      delay: 0,
      duration: 200,
      easing: 'easeInBack'
    });
  }).on('click', '#online', function () {
    anime({
      targets: '.cart_step5',
      translateX: '-100%',
      delay: 500,
      duration: 400,
      easing: 'easeInSine'
    });
  }).on('click', '.close3', function () {
    anime({
      targets: '.cart_step5',
      translateX: '100%',
      delay: 300,
      duration: 400,
      easing: 'easeOutSine'
    });
  }).on('click', '.step3', function () {
    $('.cart_mobile').addClass('cart_mobile__complete');
    $('.cart_mobile__name').text('Ваш заказ');
    $('html, body').removeClass('overflow_global');
    anime({
      targets: '.cart_step5',
      translateX: '100%',
      delay: 10,
      duration: 100,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_step4',
      translateY: '100%',
      duration: 20,
      delay: 120,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_overlay4',
      height: 0,
      delay: 0,
      duration: 200,
      easing: 'easeInBack'
    });
    anime({
      targets: '.cart_step2',
      translateY: '100%',
      duration: 30,
      delay: 140,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_overlay2',
      height: 0,
      delay: 0,
      duration: 200,
      easing: 'easeInBack'
    });
    anime({
      targets: '.cart_step1',
      translateX: 290,
      duration: 150,
      delay: 40,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.cart_overlay',
      width: 0,
      delay: 0,
      duration: 120,
      easing: 'easeInBack'
    });
  });
})(jQuery);