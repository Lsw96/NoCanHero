
$(document).ready(function () {
  // 스크롤 이벤트 감지
  $(window).scroll(function () {
    // 각 프로젝트에 대해 실행할 함수 호출
    $('.about-wrap').each(function () {
      revealOnScroll($(this));
    });
  });

  // 프로젝트 나타나는 함수
  function revealOnScroll(project) {

    const scroll = $(window).scrollTop(); // 스크롤 위치
    const projectTop = project.offset().top; // 프로젝트 상단 위치
    const windowHeight = $(window).height(); // 윈도우 높이

    if (scroll + windowHeight / 1.25 > projectTop) {
      project.addClass('active');
    }

    // 새로고침 시 페이지 최상단으로 이동
    $(window).on('beforeunload', function () {
      $(window).scrollTop(0);
    });
  }
});


// About.html - Skill Menu Change
$('.about-text ul li').each(function () {

  $(this).on('click', function () {
    $('.about-text ul li').removeClass('actives');
    $(this).toggleClass('actives');
  });
});

const skillsList = document.querySelector('.skillList');
const textParagraph = document.querySelector('.text');

const skillDescriptions = {
  htmlCss: '시맨틱 태그 활용 및 웹 표준 및 접근성 고려. CSS 미디어쿼리를 이용한 반응형 작업과 Transition 및 Animation 활용 가능',
  SCSS: '가독성 및 코드의 재활용성을 올리기 위한 Nesting 및 Variables, @import활용 가능',
  javascript: 'ES6문법 및 동기/비동기 처리의 이해. 인터랙티브한 웹을 제작하기 위한 지속적인 문법 개념 강화 중',
  react: 'React hook 을 활용 및 컴포넌트 단위로 쪼개어 다양한 프로젝트에 사용하려 지속적인 노력 중',
  nodeJs: 'Sequelize를 이용한 DB연결 및 서버 통신 경험 있음',
  mySql: 'Workbench를 이용한 기본 문법 및 사용 경험 있음',
  C: '기본 문법 개념 정리 및 2D 및 3D VR, MR 게임 제작 경험 있음',
};

skillsList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    for (const li of skillsList.children) {
      li.classList.remove('actives');
    }

    event.target.classList.add('actives');

    const skillKey = event.target.getAttribute('data-skill');

    textParagraph.textContent = skillDescriptions[skillKey];
  }
});