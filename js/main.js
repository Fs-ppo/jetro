$(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',
      });
      $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: true,
        focusOnSelect: true,
        loop: true,
        infinity: true,
        arrows: false,

        responsive: [
          {
            breakpoint: 861,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 721,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 581,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 441,
            settings: {
              slidesToShow: 2,
            }
          },
        ]

      });

      $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });

  });