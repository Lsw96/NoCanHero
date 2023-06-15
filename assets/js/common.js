// gsap.registerPlugin(ScrollTrigger);
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

// 페이지 프로그래스바
function progressBar(){
    const scrollTop = document.querySelector("html").scrollTop;
    const scrollHeight = document.querySelector('html').scrollHeight;
    const clientHeight = document.querySelector('html').clientHeight;
    const progress = (((scrollTop + clientHeight) / scrollHeight) * 100); // 백분율 환산
    document.querySelector("#progress-bar").style.width = progress + "%";
};



