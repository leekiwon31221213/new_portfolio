/* const section3 = document.querySelector('.section3');
const section2 = document.querySelector('.section2');
const section1 = document.querySelector('.section1');
const sections = document.querySelectorAll('.section');

let currentSection = 0;
let scrollStart = 0;
let isTransitioning = false;

const changeSection = (next) => {
  if (next >= 0 && next < sections.length && !isTransitioning) {
    isTransitioning = true;

    sections.forEach((section, index) => {
      section.style.left = index > next ? '100%' : '-100%';
      section.style.top = '0';

      // 모든 섹션에서 active-section 클래스 제거
      section.classList.remove('section2-active');
    });

    sections[next].style.left = '0';
    sections[next].style.top = '0';

    // 섹션 2가 활성화될 때만 active-section 클래스 추가
    if (next === 1) {
      sections[next].classList.add('section2-active');
    }

    currentSection = next;

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
};

if (window.innerWidth >= 1400) {
  window.addEventListener('wheel', (e) => {
    if (isTransitioning) return;

    if (currentSection < 2) {
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        changeSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        changeSection(currentSection - 1);
      }
    } else if (currentSection === 2) {
      const isScrolledToTop = section3.scrollTop === 0;
      if (e.deltaY < 0 && isScrolledToTop) {
        if (scrollStart === 0) {
          scrollStart = e.timeStamp;
        } else if (e.timeStamp - scrollStart < 500) {
          changeSection(currentSection - 1);
        } else {
          scrollStart = 0;
        }
      }
    }
  });
} else {
  window.addEventListener('scroll', (e) => {
    const section2Top = section2.offsetTop;
    const section3Top = section3.offsetTop;

    if (window.pageYOffset >= section2Top && window.pageYOffset < section3Top) {
      section2.classList.add('section2-active');
    } else if (window.pageYOffset < section2Top && window.pageYOffset < section3Top) {
      section2.classList.remove('section2-active');
    }
  });
} */
$(document).ready(function () {
  const section2 = $('.section2');
  const section3 = $('.section3');
  const sections = $('.section');
  let currentSection = 0;
  let scrollStart = 0;
  let isTransitioning = false;

  const changeSection = (next) => {
    if (next >= 0 && next < sections.length && !isTransitioning) {
      isTransitioning = true;

      sections.each((index, section) => {
        $(section).css('left', index > next ? '100%' : '-100%');
        $(section).css('top', '0');

        // 모든 섹션에서 section2-active 클래스 제거
        $(section).removeClass('section2-active');
      });

      $(sections[next]).css('left', '0');
      $(sections[next]).css('top', '0');

      // 섹션 2가 활성화될 때만 section2-active 클래스 추가
      if (next === 1) {
        section2.addClass('section2-active');
      }

      currentSection = next;

      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  };

  if ($(window).width() >= 1400) {
    $(window).on('wheel', (e) => {
      if (isTransitioning) return;

      if (currentSection < 2) {
        if (e.originalEvent.deltaY > 0 && currentSection < sections.length - 1) {
          changeSection(currentSection + 1);
        } else if (e.originalEvent.deltaY < 0 && currentSection > 0) {
          changeSection(currentSection - 1);
        }
      } else if (currentSection === 2) {
        const isScrolledToTop = section3.scrollTop() === 0;
        if (e.originalEvent.deltaY < 0 && isScrolledToTop) {
          if (scrollStart === 0) {
            scrollStart = e.originalEvent.timeStamp;
          } else if (e.originalEvent.timeStamp - scrollStart < 500) {
            changeSection(currentSection - 1);
          } else {
            scrollStart = 0;
          }
        }
      }
    });
  } else {
    $(window).on('scroll', (e) => {
      const section2Top = section2.offset().top;
      const section3Top = section3.offset().top;

      if ($(window).scrollTop() >= section2Top && $(window).scrollTop() < section3Top) {
        section2.addClass('section2-active');
      }
    });
  }

  /* section3 scroll*/
  /* section3-2 */
  const section3_1Height = $('.section3-1').height();

  const skill_box = $('.skill_inner');
  const profile_img = $('.profile-img');

  section3.on('scroll', function () {
    if ($(this).scrollTop() > ($(this).prop('scrollHeight') - $(this).height()) / 2) {
      skill_box.css('display', 'block').addClass('active');
      profile_img.css('display', 'block').addClass('active');
    } else {
      skill_box.css('display', 'none').removeClass('active');
      profile_img.css('display', 'none').removeClass('active');
    }
  });

  // 창의 너비에 따라 프로필 이미지를 표시하거나 숨깁니다.
  function profile_img_handle() {
    if ($(window).width() >= 1025) {
      profile_img.css('display', 'block').addClass('active');
    } else if ($(window).width() <= 1025) {
      profile_img.css('display', 'none').removeClass('active');
    }
  }

  $(window).on('resize', profile_img_handle);
  profile_img_handle();

  /* section3-3 */
  const project_containe = $('.project-container');
  const section3_2Height = $('.section3-2').height();
  const totalHeight2 = section3_1Height + section3_2Height;

  section3.on('scroll', function () {
    if ($(this).scrollTop() > totalHeight2) {
      project_containe.css('display', 'block');
    } else {
      project_containe.css('display', 'none');
    }
  });
});

/* cursor style change */

document.addEventListener('DOMContentLoaded', function () {
  const a_curosr = document.body.getElementsByTagName('a');
  const swiper_cursor = document.querySelectorAll('.swiper-next-prev-btn');
  const cursor_pointer = [...a_curosr, ...swiper_cursor];

  for (let i = 0; i < cursor_pointer.length; i++) {
    cursor_pointer[i].style.cursor = 'url("/img/pointer.svg"), pointer';
  }
});
