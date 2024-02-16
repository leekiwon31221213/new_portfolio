$(document).ready(function () {
  var swiper = new Swiper('.project-container .swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    paginationType: 'progress',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    speed: 1300,
    roundLengths: true,
  });

  //스와이퍼의 슬라이드 전환 이벤트를 감지하고 이를 처리하는 코드
  swiper.on('transitionEnd', function () {
    const activeSlide = document.querySelector('.swiper-slide-active .project-img');
    const projectImgs = document.querySelectorAll('.project-img');
    projectImgs.forEach(function (img) {
      img.classList.remove('active');
    });
    activeSlide.classList.add('active');
  });
});
