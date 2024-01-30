let currentSection = 0;
const sections = document.querySelectorAll('.section');
const section3 = document.querySelector('.section3');
let scrollStart = 0;
let isTransitioning = false;

const changeSection = (next) => {
  if (next >= 0 && next < sections.length && !isTransitioning) {
    isTransitioning = true;

    if ((currentSection === 0 && next === 1) || (currentSection === 1 && next === 0)) {
      sections[currentSection].style.left = next > currentSection ? '-100%' : '100%';
      sections[next].style.left = '0';
    } else {
      sections[currentSection].style.top = next > currentSection ? '-100%' : '100%';
      sections[next].style.top = '0';
    }

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
