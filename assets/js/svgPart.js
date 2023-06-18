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