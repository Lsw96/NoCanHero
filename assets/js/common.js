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

//로고 누를 시 페이지 최상단으로 이동
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
      audio.volume = 1;
      return attr.replace("02", "01");
    }
  });
});