$(document).ready(function(){
  $('.slider__inner').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    initialSlide: 2,
    centerMode: true,
    centerPadding: '25px',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: '130px',
        }
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: '30px',
          slidesToShow: 2,
        }
      },{
        breakpoint: 620,
        settings: {
          centerPadding: '60px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: '100px',
          slidesToShow: 2,
        }
      },{
        breakpoint: 825,
        settings: {
          centerPadding: '25px',
          slidesToShow: 3,
        }
      },{
        breakpoint: 920,
        settings: {
          centerPadding: '70px',
          slidesToShow: 3,
        }
      },{
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 3,
          centerMode: false,
        }
      }, {
        breakpoint: 1919,
        settings: {
          arrows: true,
          slidesToShow: 4,
          centerMode: false,
        }
      }
    ]
  });
});


