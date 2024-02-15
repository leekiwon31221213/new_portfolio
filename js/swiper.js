
  $(document).ready(function () {
    // 슬라이드가 1개일 경우 슬라이드 동작 OFF
    if ($('.project-container .swiper-slide').length <= 1) {
      $('.project-container .swiper-slide').addClass('wp-completely');
      return;
    }
    var swiper = new Swiper('.project-container .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationType: 'progress',
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 0,
      speed: 1200,
      roundLengths: true,
    });
  });
