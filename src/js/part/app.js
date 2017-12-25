var circleFixed = function() {
    // чудо магия выравнивания колец в сайдере
    if ( $(window).width() > 1180 ) {
        var n = ( $(window).width() - 1920 ) / 2;
        $('.slider-overlay').css('left', n + 'px');
    } else {
        $('.slider-overlay').css('left', '-320px');
    }
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
});

$(window).resize(function() {
    circleFixed();
});