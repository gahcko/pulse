$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button class="slick-prev"><img src="img/left.jpg"></button>',
    nextArrow: '<button class="slick-next"><img src="img/right.jpg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});