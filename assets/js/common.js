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

// 별을 랜덤하게 생성하여 화면에 보여주는 함수
function star() {
    const count = 100;
    const stars = document.getElementById("star"); // 문서의 #star 요소 선택
    
    let i = 0;
    // count값 만큼 while반복문 실행
    while(i < count ) {
        const star = document.createElement('i'); // 문서에 i태그 요소생성

        const colors = ["#2D53A4", "#e9ecef"]; // clors배열에 blue, white색상 추가
        //console.log(colors); // count값만큼 생성 index:0(#2D53A4), 1(#e9ecef) length:2, Prototype: Array(0)
        // const randomColor = colors[Math.random() * colors.length]; // 200개의 undefined 출력(값을 할당하지 않은 변수 or 메서드나 선언도 평가할 변수가 값을 할당받지 않은 경우 or 값을 명시적으로 반환하지 않을 경우)
        // 인덱스인 0과 1을 반환해야 값이 나올텐데 실수로 반환돼서 undefined 나오는것 같아 정수로 변환하기
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Math.random(): 0~1사이의 난수를 발생 / colors.length: colors배열의 요소개수를 구함 / Math.floor() 소수점이하 제거, 0 부터 colors.length미만의 정수 중 하나를 무작위 추출 / 추출된 정수를 colors배열의 인덱스로 사용해 무작위로 색상을 선택 / randomColor에 선택된 색상을 할당 
        // console.log(randomColor);
        const x = Math.floor(Math.random() * stars.clientWidth);
        // console.log(stars.clientWidth);
        // console.log(window.innerWidth); // 현재 브라우저 창 너비값 출려
        // console.log(x); // left의 위치값을 0 부터 브라우저 창 너비값 내에서 무작위 정수값 출력 
        const y = Math.floor(Math.random() * stars.clientHeight); // top값 무작위 출력 / 위 console.log()출력과 내용동일 
        const size = Math.floor(Math.random() * 10);
        star.style.backgroundColor = randomColor;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        stars.appendChild(star); // Node.appendChild() / 특정 부모노드의 자식목록에 노드 추가
        i++
    }
}
star();

// index.html -> main.html to Move
var link = 'main.html';
setTimeout(function() {
    // location.href= link;
    location.replace(link);
}, 6000);


// // 페이지 프로그래스바
// function progressBar(){
//     const scrollTop = document.querySelector("html").scrollTop;
//     const scrollHeight = document.querySelector('html').scrollHeight;
//     const clientHeight = document.querySelector('html').clientHeight;
//     const progress = (((scrollTop + clientHeight) / scrollHeight) * 100); // 백분율 환산
//     document.querySelector(".progress-bar").style.width = progress + "%";
// };
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



