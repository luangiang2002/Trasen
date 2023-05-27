$(document).on('ready', (function () {
  $('.regular').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        }
      },]
  });
}))
// navbar
$(document).ready(function(){
  $('#toggle').click(function(){
    $('.main-menu').slideToggle();
  })
  })