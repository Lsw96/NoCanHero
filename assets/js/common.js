gsap.registerPlugin(ScrollTrigger);
// gsap.to(대상, {
//     scrollTrigger: {
//         trigger: "대상", // 스크린시작요소감지
//         pin: true, // 스크린고정
//         start: '요소시작 스크린시작점',
//         end: '요소끝 스크린끝',
//         x: 100, // x축으로 100만큼
//         y: 100, // y축으로 100만큼
//         opacity: 1,
//         scrub: 1, // 다음 요소 따라잡는데 1초
//         duration: 1, // 애니메이션 진행속도
//         delay: 1, // 1초 후 다음 애니메이션 진행
//         amount: 1, // 
//         stagger: 1,
//         stagger:{each: 1, from: "center", grid: 'auto', ease: 'power2.inOut', repeat: -1},
//         repeat: -1,
//         repeatDelay: 1,
//         toggleAction: 'play none none none', 
//         markers: true
//     }
// })
//======================================================================================================================
// // 엘리베이터 애니메이션
// function elevator(index_number){
//     let numbers = parseInt(index_number);
//     const ele = document.querySelectorAll('.elevator')[numbers];
//     let leftDoor = document.querySelectorAll('.left-door')[numbers];
//     let rightDoor = document.querySelectorAll('.right-door')[numbers];
//     const elePosition = ele.getBoundingClientRect().top; // 이 요소가 브라우저 상단에 얼마나 떨어져있는지에 대한 양수,음수 측정 함수 

//     if (elePosition < -450) {
//         leftDoor.style.left = "0";
//         rightDoor.style.right = "-100%";
//     }else if (elePosition <= 150) {
//         leftDoor.style.left = "-40%";
//         rightDoor.style.right = "-140%";
//     }  
//     else {
//         leftDoor.style.left = "0";
//         rightDoor.style.right = "-100%";
//     }
// };
// // 페이지 스크롤 함수 호출
// window.onscroll = function (){
//     progressBar();
//     elevator(0);
//     elevator(1);
//     elevator(2);
// };
//======================================================================================================================

// 헤더 내릴때 스크롤 효과
window.addEventListener('wheel', e => {
  const scrollDown = e.deltaY > 0;
  if (scrollDown) {
      $('header').css('transform','translateY(-91%)');
  } else {
      $('header').css('transform','translateY(0)');
  }
});

// 페이지 프로그래스바
function progressBar(){
  let currY = document.documentElement.scrollTop;//스크롤한 높이
  let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;//전체 높이
  let percentage = (currY / totalY) * 100;//퍼센트 값
  document.querySelector("#progress-bar").style.width = percentage + "%";
};
window.onscroll = function (){
  progressBar();
}

// 새로고침시 최상단으로 서서히 이동
$(function(){
  $("html, body").animate({ scrollTop: 0 }, "slow"); 
});

//로고 누를 시 페이지 최상단 이동
document.getElementById('logo').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 소리이미지 변경 및 BGM재생
$("#soundBtn").click(function() {
  const audio = document.querySelector('#sounds');
  soundImage = $(this);
  soundImage.attr("src", function(index, attr){
    if (attr.match('01')) {
      audio.pause();
      return attr.replace("01", "02");
    }
    else {
      audio.play();
      return attr.replace("02", "01");
    }
  });
});
