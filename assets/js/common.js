// Dark Mode
$('.switch').on('click', () => {

  $('.switch').toggleClass('active');
  $('body').toggleClass('dark');
  $('.about-content').toggleClass('white');
  $('.about-text').toggleClass('black');
});

// 페이지 로드 후 실행되는 함수
$(document).ready(function () {
  // 스크롤 이벤트 감지
  $(window).scroll(function () {
    // 스크롤이 일정 이상 되면 버튼 보이게, 아니면 숨기기
    if ($(this).scrollTop() >= 800) {
      $('.scrollToTopBtn').fadeIn();
    } else {
      $('.scrollToTopBtn').fadeOut();
    }
  });

  // 맨 위로 스크롤하는 함수
  $('.scrollToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });
});

// // 페이지 로드 후 실행되는 함수
// $(document).ready(function () {
//   // 스크롤 이벤트 감지
//   $(window).scroll(function () {
//     // 각 프로젝트에 대해 실행할 함수 호출
//     $('.project').each(function () {
//       revealOnScroll($(this));
//     });
//   });

//   // 프로젝트 나타나는 함수
//   function revealOnScroll(project) {

//     const scroll = $(window).scrollTop(); // 스크롤 위치
//     const projectTop = project.offset().top; // 프로젝트 상단 위치
//     const windowHeight = $(window).height(); // 윈도우 높이

//     // 프로젝트가 화면에 50% 이상 나타났을 때
//     if (scroll + windowHeight / 2 > projectTop) {
//       project.addClass('active');
//     }

//     // 새로고침 시 페이지 최상단으로 이동
//     $(window).on('beforeunload', function () {
//       $(window).scrollTop(0);
//     });
//   }
// });
