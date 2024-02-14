let currentSection = 0;
const sections = document.querySelectorAll('.section');
const section3 = document.querySelector('.section3');
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

/* section3 */
const section3_1Height = document.querySelector('.section3-1').clientHeight;
const section3_2_one_depth_Height = document.querySelector('.one-depth').clientHeight;
const section3_2_two_depth_Height = document.querySelector('.two-depth').clientHeight;

const totalHeight = section3_1Height + section3_2_one_depth_Height + section3_2_two_depth_Height;

// console.log(section3_2_one_depth_Height);
// console.log(section3_2_one_depth_Height);
// console.log(section3_2_two_depth_Height);

const skill_box = document.querySelector('.skill_inner');
const profile_img = document.querySelector('.profile-img');

section3.addEventListener('scroll', function () {
    if (section3.scrollTop > totalHeight / 2) {
        skill_box.style.display = 'block';
        skill_box.classList.add('active');

        profile_img.style.display = 'block';
        profile_img.classList.add('active');
    } else {
        skill_box.style.display = 'none';
        skill_box.classList.remove('active');
        profile_img.style.display = 'none';
        profile_img.classList.remove('active');
    }
});

/* mouse event */

document.addEventListener('DOMContentLoaded', function () {
    const a_cursor = document.body.getElementsByTagName('a');

    for (var i = 0; i < a_cursor.length; i++) {
        if (window.getComputedStyle(a_cursor[i]).cursor === 'pointer') {
            a_cursor[i].style.cursor = 'url("/img/pointer.svg"), pointer';
        }
    }
});
