window.addEventListener('DOMContentLoaded', function (event) {

  const imgs = document.querySelectorAll('img:not(.visual img)');

  if (imgs.length > 0) {
    imgs.forEach(function (img) {
      if (img.getAttribute('srcset') != null) {
        img.setAttribute('data-srcset', img.getAttribute('srcset'));
        img.setAttribute('srcset', '../assets/img/blank.svg')
      }
      if (img.getAttribute('src') != null) {
        img.setAttribute('data-src', img.getAttribute('src'));
        img.setAttribute('src', '../assets/img/blank.svg')
      }
      img.classList.add('lazyload')
    })
  }
  
})