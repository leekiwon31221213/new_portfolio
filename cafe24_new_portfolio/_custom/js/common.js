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
  const section3_2_one_depth_Height = $('.one-depth').height();
  const section3_2_two_depth_Height = $('.two-depth').height();
  const skill_box = $('.skill-contents');
  const profile_img = $('.profile-img');

  $('.section3').on('scroll', function () {
    const section3_2_total_height = section3_1Height + section3_2_one_depth_Height + section3_2_two_depth_Height;

    if ($(this).scrollTop() >= section3_2_total_height) {
      // console.log('특정 스크롤 값에 도달');
      skill_box.css('visibility', 'visible').addClass('active');
      if ($(window).width() >= 1025) {
        profile_img.css('visibility', 'visible');
      } else {
        profile_img.css('visibility', 'hidden');
      }
      profile_img.addClass('active');
    } else {
      skill_box.css('visibility', 'hidden').removeClass('active');
      profile_img.css('visibility', 'hidden').removeClass('active');
    }
  });

  /* section3-3 */
  const project_containe = $('.project-container');
  const section3_2Height = $('.section3-2').height();
  const totalHeight2 = section3_1Height + section3_2Height;

  section3.on('scroll', function () {
    if ($(this).scrollTop() > totalHeight2) {
      project_containe.css('visibility', 'visible').addClass('active');
    } else {
      project_containe.css('visibility', 'hidden').removeClass('active');
    }
  });

  /* section3-3 */
  const section3_3Height = $('.section3-3').height();
  const section3_4Height = $('.section3-4').height();
  const section3_5_contents = $('.section3-5-contents-text');
  const section3_5_img = $('.contact-profile-img');

  const totalHeight3 = section3_1Height + section3_2Height + section3_3Height + section3_4Height;

  section3.on('scroll', function () {
    if ($(this).scrollTop() > totalHeight3) {
      section3_5_img.fadeIn();
      section3_5_contents.css('visibility', 'visible').addClass('active');
    } else {
      section3_5_img.fadeOut();
      section3_5_contents.css('visibility', 'hidden').removeClass('active');
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
