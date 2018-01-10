var circleFixed = function() {
    // чудо магия выравнивания колец в сайдере
    if ( $(window).width() > 1180 ) {
        var n = ( $(window).width() - 1920 ) / 2;
        $('.slider-overlay, .head-inn-bottom__bg, .content-bg, .svg-box').css('left', n + 'px');
    } else {
        $('.slider-overlay').css('left', '-320px');
        $('.head-inn-bottom__bg, .content-bg').css('left', '-460px');
        $('.svg-box').css('left', '-340px');
    }
}

var cardBgHeight = function() {
  height = $('.content-title--card').height();
  $('.content-bg--card').height(height + 130);
}




$(document).ready(function() {
     $('.tab-list__one').on('click', function() {
        $(this).parents('.tab-list').find('.tab-list__one').removeClass('active');
        $(this).addClass('active');
        idx = $(this).index();

        $(this).parents('.tabs').find('.tab-one').hide().removeClass('open');
        $(this).parents('.tabs').find('.tab-one').eq(idx).show().addClass('open');
    });

    var mainSlider = new Swiper('.top-slider', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
    });

    circleFixed();

    $('.spoler-title ').on('click', function() {
      $(this).toggleClass('open').next().slideToggle();
    });

    var galleryTop = new Swiper('.gallery-top', {
      slidesPerView: 1,
      spaceBetween: 10,
    });

    var galleryThumbs = new Swiper('.gallery-prev', {
      spaceBetween: 5,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });

    //galleryTop.controller.control = galleryThumbs;
    //galleryThumbs.controller.control = galleryTop;

    $('.gallery-prev .swiper-slide').on('click', function() {
        $('.gallery-prev .swiper-slide').removeClass('active');
        $(this).addClass('active');
        idx = $(this).index();
        galleryTop.slideTo(idx);
    });

    if ( $('.gallery-top').length > 0 ) {
        galleryTop.on('slideChangeTransitionEnd', function () {
            var idx = galleryTop.activeIndex;
            galleryThumbs.slideTo(idx, 300);
            $('.gallery-prev .swiper-slide').removeClass('active');
            $('.gallery-prev .swiper-slide').eq(idx).addClass('active');
        });
    }


    var objectSlider = new Swiper('.object-slider', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    $('.object-title').on('click', function() {
      var idx = $(this).parents('.object').index();
      $(this).next('.object-hidden').slideToggle();
      $(this).toggleClass('open');
      console.log(objectSlider[0]);
      objectSlider[idx].update();
    });

    cardBgHeight();

    $('.object').each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function(item) {
            return item.el.attr('title');
          }
        },
        gallery: {
          enabled: true,
          tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find('img');
          }
        }
        
      });
    });


    $("#order-form").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            }
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            }
       }
    });

    $("#order-phone").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            }
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            }
       }
    });
});

$(window).resize(function() {
    circleFixed();
    cardBgHeight();
});