let currentSection = 0;
const sections = document.querySelectorAll('.section');
const section3 = document.querySelector('.section3');
let scrollStart = 0;

const changeSection = (next) => {
    if (next >= 0 && next < sections.length) {
        sections[currentSection].style.left = '-100%'; // 현재 섹션을 왼쪽으로 이동
        sections[next].style.left = '0'; // 다음 섹션을 화면표시
        currentSection = next;
    }

    document.body.style.overflow = currentSection === 2 ? 'auto' : 'hidden';
};

window.addEventListener('wheel', (e) => {
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
                // 섹션 3에서 스크롤이 맨 위에 있을 때 스크롤 시작 지점을 기록
                scrollStart = e.timeStamp;
            } else if (e.timeStamp - scrollStart < 500) {
                // 스크롤 시작 지점에서 500ms 이내에 휠을 한 번 더 하면 섹션 2로 이동
                changeSection(currentSection - 1);
            } else {
                scrollStart = 0; // 스크롤 시작 지점 초기화
            }
        }
    }
});

// 섹션 3 스크롤 이벤트를 감지하여 스크롤 시작 지점 초기화
section3.addEventListener('scroll', () => {
    scrollStart = 0;
});
