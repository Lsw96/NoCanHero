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
//======================================================================================================================
// // 별을 랜덤하게 생성하여 화면에 보여주는 함수
// function star() {
//     const count = 100;
//     const stars = document.getElementsByClassName("star")[0]; // 문서의 #star 요소 선택
    
//     let i = 0;
//     // count값 만큼 while반복문 실행
//     while(i < count ) {
//         const star = document.createElement('i'); // 문서에 i태그 요소생성

//         const colors = ["#2D53A4", "#e9ecef"]; // clors배열에 blue, white색상 추가
//         //console.log(colors); // count값만큼 생성 index:0(#2D53A4), 1(#e9ecef) length:2, Prototype: Array(0)
//         // const randomColor = colors[Math.random() * colors.length]; // 200개의 undefined 출력(값을 할당하지 않은 변수 or 메서드나 선언도 평가할 변수가 값을 할당받지 않은 경우 or 값을 명시적으로 반환하지 않을 경우)
//         // 인덱스인 0과 1을 반환해야 값이 나올텐데 실수로 반환돼서 undefined 나오는것 같아 정수로 변환하기
//         const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Math.random(): 0~1사이의 난수를 발생 / colors.length: colors배열의 요소개수를 구함 / Math.floor() 소수점이하 제거, 0 부터 colors.length미만의 정수 중 하나를 무작위 추출 / 추출된 정수를 colors배열의 인덱스로 사용해 무작위로 색상을 선택 / randomColor에 선택된 색상을 할당 
//         // console.log(randomColor);
//         const x = Math.floor(Math.random() * stars.clientWidth);
//         // console.log(stars.clientWidth);
//         // console.log(window.innerWidth); // 현재 브라우저 창 너비값 출려
//         // console.log(x); // left의 위치값을 0 부터 브라우저 창 너비값 내에서 무작위 정수값 출력 
//         const y = Math.floor(Math.random() * stars.clientHeight); // top값 무작위 출력 / 위 console.log()출력과 내용동일 
//         const size = Math.floor(Math.random() * 10);
//         star.style.backgroundColor = randomColor;
//         star.style.left = x + 'px';
//         star.style.top = y + 'px';
//         star.style.width = size + 'px';
//         star.style.height = size + 'px';

//         stars.appendChild(star); // Node.appendChild() / 특정 부모노드의 자식목록에 노드 추가
//         i++
//     }
// }
// star();
//======================================================================================================================
// 별 생성 함수
const canvas = document.getElementById('stars'); // DOM요소 선택
const ctx = canvas.getContext("2d"); // 2D렌더링 컨텍스트 타입 지정

var screen, starArr; // 변수 선언 할당X

var params = { speed:1, count: 400, life: 5 }; // 객체 생성

setup() // 별 생성 함수호출
update() // 별 표시, 이동 함수호출

// onresize이벤트를 사용하여 창 크기를 조정할 시 호출
window.onresize = function(){
    setup();
}

function Star(){
    // console.log(this); // Star
    // star의 x값에 0~1랜덤한 소수값과 곱한다 캔버스너비를
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;

    // Star 이동하는 move함수표현식 선언 / 함수표현식은 호이스팅에 영향X 그외장점 : 클로져, 콜백으로 사용가 (다른 함수의 인자로 넘길 수 있음) / 함수선언(파라미터), 함수호출(인자)
    this.move = function(){
        // z값에 params의 speed value값을 차감
        this.z -= params.speed;
        // console.log(this); // star { x:123.1234, y:123.1234, z:123.1234, move: f, show: f }
        // 별이 캔버스 밖으로 이동하면 z위치에서 속도 매개변수를 뺀다.
        if(this.z <= 0){
            this.z = canvas.width;
        }
    };
    // 창 너비의 절반과 창 높이의 절반의 두값을 포함
    // screen.c = [window.innerWidth * 0.5, window.innerHeight * 0.5];
    // 별을 실제로 표시할 표시 함수 선언
    this.show = function (){
        let x,y,radius,opacity; // 변수선언 할당X
        // 반지름의 반경은 캔버스 너비를 z로 나눈 값이 됨
        radius = canvas.width / this.z;
        // x위치 정의 / 이전에 생성된 임의의 x에서 창 너비를 절반 뺌 / 위치를 지정하고 전체 표현식에 반지름을 곱함
        x = (this.x - screen.c[0]) * radius;
        // 수평으로 중앙에 배치합니다.
        x = x + screen.c[0]
        y = (this.y - screen.c[1]) * radius;
        y = y + screen.c[1]
        // 불투명도를 설정하고 그렇지 않으면 불투명도를 1로 설정 / 별이 우리에게 다가올 때 opacity를 이용해 부드러운 페이딩 효과
        opacity = radius > params.life ? (2 - radius / params.life) * 1.5 : 1;
        // 흰색 별
        ctx.beginPath(); // 경로를 그리는 법
        ctx.fillStyle = 'rgba(255,255,255,' + opacity +')';
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        // 경로를 색상으로 채움
        ctx.fill();
    };

    this.shows = function (){
        let x,y,radius,opacity;
        radius = canvas.width / this.z;
        x = (this.x - screen.c[0]) * radius;
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * radius;
        y = y + screen.c[1];
        opacity = radius > params.life ? (2 - radius / params.life) * 1.5 : 1;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,' + opacity +')';
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}


// 캔버스와 별 생성 함수 선언
function setup(){
    // screen이라는 변수에 w:너비, h:높이, c: 너비,높이의 반
    screen = {
        w: window.innerWidth, // 세로 스크롤을 포함한 윈도우 창의 너비
        h: window.innerHeight, // 세로 스크롤을 포함한 윈도우 창의 높이
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5] // c배열에는 너비와 높이가 반반인 값
    };
    // 현재 애니메이션을 취소
    window.cancelAnimationFrame(update);
    // DOM요소로 선택한 캔버스의 너비와 높이를 창의 너비와 높이에 맞춤
    canvas.width = screen.w;
    canvas.height = screen.h;

    // 배열 변수 선언
    starArr = [];
    // params.count 변수값 동안 반복
    for(var i = 0; i < params.count; i++ ){
        //  값만큼 새로운 별 생성
        starArr[i] = new Star();
    }
}
// 별을 표시하고 이동할 업데이트 기능 함수
function update(){
    // 배경색 생성
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height); // 수직방향 / 시작(x0, y0), 종료(x1, y1)
    gradient.addColorStop(0, '#010101');
    gradient.addColorStop(1, '#14194E');
    ctx.fillStyle = gradient;
    // 사각형을 생성
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 별 배열을 통해 반복 / 별 함수에서 선언된 표시 및 이동 함수 호출
    starArr.forEach(function (s){
        s.show();
        s.move();
    });
    // 요청 애니메이션 프레임 함수로 전체 애니메이션을 불러옴
    window.requestAnimationFrame(update);
};

//======================================================================================================================
// index.html -> trauma.html to Move
// var link = 'trauma.html';
// setTimeout(function() {
//     // location.href= link;
//     location.replace(link);
// }, 6000);


