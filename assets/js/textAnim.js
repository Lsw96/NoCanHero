
document.addEventListener('DOMContentLoaded', function () {

  const textElement = document.querySelector('.main-text-animated');
  const texts = [
    '무한한 가능성이 보이는 사람',
    '변화에 두렵지 않아 보이는 사람',
    '그 변화에 몹시 즐거워 보이던 사람',
    '자기개발의 중요성을 아는 그런 사람이 되고 싶은 나'
  ];

  let currentTextIndex = 0;

  function animateText() {
    const currentText = texts[currentTextIndex];
    let charIndex = 0;

    const appearInterval = setInterval(() => {
      const appearedText = currentText.slice(0, charIndex);
      textElement.textContent = appearedText;

      charIndex++;

      if (charIndex > currentText.length) {
        clearInterval(appearInterval);

        // ㅁ초 대기 후 텍스트 지우기
        setTimeout(() => {
          animateErase();
        }, 4000);
      }
    }, 50);
  }

  function animateErase() {
    const currentText = texts[currentTextIndex];
    let charIndex = currentText.length;

    const eraseInterval = setInterval(() => {
      const erasedText = currentText.slice(0, charIndex);
      textElement.textContent = erasedText;

      charIndex--;

      if (charIndex < 0) {
        clearInterval(eraseInterval);
        currentTextIndex = (currentTextIndex + 1) % texts.length
        animateText();
      }
    }, 50);
  }

  animateText();
});

const FPS = 10;
const DURATION = 300;
const CHARACTERS = 'ABCDEFGHI';
const TEXT = 'DEVELOPER';
const DELAY = ~~(300 / FPS);
const FRAME_COUNT = ~~(DURATION / 300) * FPS
const $Element = document.querySelector('.main-title');
let frameIndex = 0;
let timeoutId = undefined;

function resetText() {
  if (timeoutId !== undefined) clearTimeout(timeoutId);
  frameIndex = 0;
  $Element.innerText = TEXT;
}

function setRandomText() {
  const text = Array.from({ length: TEXT.length }).map(() => CHARACTERS[~~(Math.random() * CHARACTERS.length)]);
  $Element.innerText = text.join('');
}

function animate() {
  if (frameIndex >= FRAME_COUNT) {
    resetText();
  } else {
    frameIndex += 1;
    setRandomText();
    timeoutId = setTimeout(animate, DELAY);
  }
}

$Element.addEventListener('mouseenter', animate);
$Element.addEventListener('mouseout', resetText);

resetText();