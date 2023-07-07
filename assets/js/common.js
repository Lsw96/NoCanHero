// const circleSpans = document.querySelectorAll('.circle span');
// const ul = document.querySelector('ul');

// circleSpans.forEach((span, i) => {
//   span.addEventListener('click', () => {
//     ul.style.transform = `translateX(${i * -640}px)`;
//   });
// });

// for(i=0; i<5; i++){
//   let num = Math.floor(Math.random()*11)
//   console.log(num)
// }

function chColor(){
  let arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
  let arrNum = Math.floor(Math.random() * arrColor.length);
  let bodyTag = document.querySelector('body');
  console.log(bodyTag);

  bodyTag.style.backgroundColor = arrColor[arrNum];
}

$(".circle").css("border","1px solid skyblue").css("backgroundColor","#f2f2f2");

$(function(){
  var obj = [ {"area" :"서울"}, {"area" :"부산"}, {"area" : "전주"} ]

  $(obj).each(function(i,o){
    console.log(i + ":", o);
  });
  console.log("=======The End1=======");
});