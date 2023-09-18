function chColor(){
  let arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f", "#ff4500"];
  let arrNum = Math.floor(Math.random() * arrColor.length);
  let heartTag = document.querySelector('.icon-like');
  // console.log(heartTag);
  heartTag.style.color = arrColor[arrNum];
}

$('.btn-like').click(function(){
  // $('.icon-like').toggleClass('select');
  // $(this).next().toggleClass('active'); 과제에 필요한 코드
  chColor(); // 활용코드
});