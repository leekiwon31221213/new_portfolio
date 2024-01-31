//이거 되는거 건들면 안됨
let currentSection = 0;
const sections = document.querySelectorAll('.section');
const section3 = document.querySelector('.section3');
let scrollStart = 0;
let isTransitioning = false;

const changeSection = (next) => {
  if (next >= 0 && next < sections.length && !isTransitioning) {
    isTransitioning = true;

    // 모든 섹션을 기본 위치로 설정
    sections.forEach((section, index) => {
      if (index !== next) {
        section.style.left = index > next ? '100%' : '-100%';
        section.style.top = '0';
      }
    });

    // 다음 섹션을 화면에 표시
    sections[next].style.left = '0';
    sections[next].style.top = '0';

    currentSection = next;

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  document.body.style.overflow = currentSection === 2 ? 'auto' : 'hidden';
};

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

section3.addEventListener('scroll', () => {
  scrollStart = 0;
});
