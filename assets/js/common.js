const circleSpans = document.querySelectorAll('.circle span');
const ul = document.querySelector('ul');

circleSpans.forEach((span, i) => {
  span.addEventListener('click', () => {
    ul.style.transform = `translateX(${i * -640}px)`;
  });
});