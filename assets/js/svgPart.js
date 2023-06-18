// 선이 거미줄처럼 쳐지는 효과
const svgWrap = document.querySelector('.svg-img-wrap');
const paths = document.querySelectorAll('.svg-img-wrap path');

let targetPath;

function setPath() {
    document.querySelectorAll('.svg-img-wrap path').forEach((path) => {
      if( !targetPath ) {
        targetPath = path;
      } else {
        if( path.getBoundingClientRect().top < targetPath.getBoundingClientRect().top ) {
          targetPath = path;
        }
      }
    });
}

function scrollHandler () {
    const distance = window.scrollY || document.documentElement.scrollTop;
  
    setPath();
  
    paths.forEach((path) => {
      const totalLength = path.getTotalLength();
      const pathMiddle = path.getBoundingClientRect().y + totalLength / 2;
      const distanceFromMiddle = innerHeight - Math.abs(innerHeight / 2 - pathMiddle);
  
      const offset = totalLength - (distanceFromMiddle * totalLength) / (innerHeight / 2);
      const dashArray = `${totalLength} ${totalLength}`;
  
      path.style.strokeDashoffset = offset;
      path.style.strokeDasharray = dashArray;
      path.style.setProperty('--stroke-dash-offset', offset);
    });
}
window.addEventListener('scroll', scrollHandler);


// 1F OVERVIEW 그래프 이미지
function graphImg(){
    const pjBox = document.querySelector('.pj-content');
    let graph1 = document.querySelector('.graph1');
    let graph2 = document.querySelector('.graph2');
    const graphPosition = pjBox.getBoundingClientRect().top;
    if( graphPosition < -181){
        graph1.style.opacity = '0';
        graph1.style.top = '50px';
        graph2.style.opacity = '0';
        graph2.style.top = '50px';
    } else if (graphPosition <= 554) {
        graph1.style.opacity = '1';
        graph1.style.top = '0';
        graph2.style.opacity = '1';
        graph2.style.top = '0';
    } else {
        graph1.style.opacity = '0';
        graph1.style.top = '50px';
        graph2.style.opacity = '0';
        graph2.style.top = '50px';
    }
};
// function showCircle(index_number){
//     let numbers = parseInt(index_number);
//     const userBox = document.querySelector('.box');
//     let user = document.querySelectorAll('.pj-user-box')[numbers];
//     const userPosition = userBox.getBoundingClientRect().top;

//     if (userPosition < -157) {
//         user.style.opacity = "0";
//         user.style.top = "50px";
//     }else if (userPosition <= 658) {
//         user.style.opacity = "1";
//         user.style.top = "0";
//     }  
//     else {
//         user.style.opacity = "0";
//         user.style.top = "50px";
//     }
// };

// svg Circle FadeIn and Out
function showCircle(){
    const circle01 = document.querySelector('svg rect');
    const circle02 = document.querySelector('svg .rects');
    const circle03 = document.querySelector('svg .rectas');
    const textSub01 = document.querySelector('.svgPart p:nth-of-type(3)');
    const textSub02 = document.querySelector('.svgPart p:nth-of-type(4)');
    let circle = document.querySelector('.svgPart');
    const circlePosition = circle.getBoundingClientRect().top;
    // console.log(circlePosition);

    if ( circlePosition < -1788 ) {
        circle01.style.opacity = "0";
        circle02.style.opacity = "0";
        circle03.style.opacity = "0";
        textSub01.style.opacity = "0";
        textSub02.style.opacity = "0";
    }
    else if ( circlePosition <= -1023 ) {
        textSub02.style.opacity = "1";
    }
    else if ( circlePosition <= -764 ) {
        textSub01.style.opacity = "1";
    }
    else if ( circlePosition <= -620 ) {
        circle01.style.opacity = "1";
        circle02.style.opacity = "1";
        circle03.style.opacity = "1";
    }
    else {
        circle01.style.opacity = "0";
        circle02.style.opacity = "0";
        circle03.style.opacity = "0";
        textSub01.style.opacity = "0";
        textSub02.style.opacity = "0";
    }
};
// svg Circle FadeIn and Out
var audioReload = true;
function showText(){
    const text01 = document.querySelector('.svgPart p:first-of-type');
    const text02 = document.querySelector('.svgPart p:nth-of-type(2)');
    const text03 = document.querySelector('.svgPart p:nth-of-type(5)');
    var audio01 = document.querySelector('.svgPart audio');
    audio01.volume = 0.2;

    let text = document.querySelector('.svgPart');
    const textPosition = text.getBoundingClientRect().top;
    // console.log(textPosition);
    if ( textPosition < -2000 ) {
        text03.style.opacity = "0";
    }
    else if ( textPosition <= -1600 && audioReload == false) {
        audio01.pause();
        audio01.currentTime = 0;
        audioReload = true;
    }
    else if ( textPosition < -1514 ) {
        text01.style.opacity = "0";
        text02.style.opacity = "0";
        text03.style.opacity = "1";
    }
    else if ( textPosition <= -880 ) {
        text01.style.opacity = "1";
        text02.style.opacity = "1";
    }
    else if ( textPosition <= 0 && audioReload == true) {
        audio01.muted = true;
        audio01.play();
        audio01.muted = false;
        audioReload = false;
    }
    else {
        text01.style.opacity = "0";
        text02.style.opacity = "0";
        text03.style.opacity = "0";
    }
};

window.onscroll = function (){
    showCircle();
    showText();
};