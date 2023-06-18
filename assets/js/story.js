var audioReloads = true;
function showAudio(){
    let audioBox = document.querySelector('.storyPart');
    const audioBoxPosition = audioBox.getBoundingClientRect().top;
    const text01 = document.querySelector('.right'); 
    const text02 = document.querySelector('.svgPart img'); 
    const text03 = document.querySelector('.text-wrap > p:first-child');
    const text04 = document.querySelector('.text-wrap > p:nth-of-type(3)');
    const text05 = document.querySelector('.text-wrap > p:nth-of-type(4)');
    var audio02 = document.querySelector('.storyPart audio');
    audio02.volumn = 0.5;

    if (audioBoxPosition < -267 ) {
        text01.style.opacity = "0";
        text02.style.opacity = "0";
        text03.style.opacity = "0";
        text03.style.fontSize = "60rem";
        text03.style.marginLeft = "1.2em";
        text04.style.opacity = "0";
        text05.style.opacity = "0";
    }
    else if ( audioBoxPosition < 0 && audioReloads == false ) {
        audio02.pause();
        audio02.currentTime = 0;
        audioReloads = true;
    }
    else if (audioBoxPosition <= 233) {
        text04.style.opacity = "1";
        text05.style.opacity = "1";
    }
    else if (audioBoxPosition <= 532 && audioReloads == true) {
        audio02.muted = true;
        audio02.play();
        audio02.volumn = 0.5;
        audio02.muted = false;
        audioReloads = false;
    }
    else if ( audioBoxPosition <= 533 ){
        text01.style.opacity = "1";
        text02.style.opacity = "1";
        text03.style.opacity = "1";
        text03.style.fontSize = "80rem";
        text03.style.marginLeft = "0.75em";
    }
     else {
        text01.style.opacity = "0";
        text02.style.opacity = "0";
        text03.style.opacity = "0";
        text03.style.fontSize = "60rem";
        text03.style.marginLeft = "1.2em";
        text04.style.opacity = "0";
        text05.style.opacity = "0";
    }
}

function showEye(){
    let eyeBox = document.querySelector('.storyPart');
    const eyeBoxPosition = eyeBox.getBoundingClientRect().top;
    // console.log(eyeBoxPosition);
    const eye01 = document.querySelector('.eye01');
    const eye02 = document.querySelector('.eye02');
    const eye03 = document.querySelector('.eye03');
    const eye04 = document.querySelector('.eye04');
    const eye05 = document.querySelector('.eye05');
    const eye06 = document.querySelector('.eye06');
    const eye07 = document.querySelector('.eye07');
    const eye08 = document.querySelector('.eye08');

    if ( eyeBoxPosition < -3800 ) {
        eye01.style.opacity = "0";
        eye02.style.opacity = "0";
        eye03.style.opacity = "0";
        eye04.style.opacity = "0";
        eye05.style.opacity = "0";
        eye06.style.opacity = "0";
        eye07.style.opacity = "0";
        eye08.style.opacity = "0";
    }
    else if ( eyeBoxPosition < -3304 ) {
        eye08.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -2900 ) {
        eye07.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -2438 ) {
        eye06.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -1955 ) {
        eye05.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -1600 ) {
        eye04.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -1200 ) {
        eye03.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -1006 ) {
        eye02.style.opacity = "1";
    }
    else if ( eyeBoxPosition < -723 ) {
        eye01.style.opacity = "1";
    } else {
        eye01.style.opacity = "0";
        eye02.style.opacity = "0";
        eye03.style.opacity = "0";
        eye04.style.opacity = "0";
        eye05.style.opacity = "0";
        eye06.style.opacity = "0";
        eye07.style.opacity = "0";
        eye08.style.opacity = "0";
    }
}

var audioToggle = true;
var audioToggles = true;
function showEndding(){
    let enddingBox = document.querySelector('.endding-story');
    const enddingBoxPosition = enddingBox.getBoundingClientRect().top;
    // console.log(enddingBoxPosition);
    const edImg01 = document.querySelector('.endding-story > img:nth-of-type(4)');
    const edImg02 = document.querySelector('.endding-story > img:nth-of-type(3)');

    var audio02 = document.querySelector('.endding-story > audio');
    var audio03 = document.querySelector('.endding-story audio:nth-of-type(2)');
    audio02.volume = 0.5;
    audio03.volume = 0.2;
    if ( enddingBoxPosition < -5800 && audioToggles == false ) {
        audio03.pause();
        audio03.currentTime = 0;
        audioToggles = false;
    }
    else if ( enddingBoxPosition < -935 && audioToggles == true ) {
        audio03.muted = true;
        audio03.play();
        audio03.muted = false;
        audioToggles = false;
    }
    else if ( enddingBoxPosition < 312 && audioToggle == false ) {
        audio02.pause();
        audio02.currentTime = 0;
        audioToggle = true;
    }
    else if ( enddingBoxPosition < 764 ) {
        edImg02.style.opacity = "1";
    }
    else if ( enddingBoxPosition < 863 ) {
        edImg01.style.opacity = "1";
    }
    else if ( enddingBoxPosition < 1064 && audioToggle == true) {
        audio02.muted = true;
        audio02.play();
        audio02.muted = false;
        audioToggle = false;
    }
    else {
        edImg01.style.opacity = "0";
        edImg02.style.opacity = "0";
    }
}

window.addEventListener('scroll', function(){
    showAudio();
    showEye();
    showEndding();
});