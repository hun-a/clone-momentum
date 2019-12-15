const body = document.querySelector('body');

const IMG_NUMBER = 10;

function paintImage(index) {
  const image = new Image();
  image.src = `public/img/background/${String(index).padStart(2, '0')}.jpg`;
  image.classList.add('js-background');
  body.prepend(image);
}

function getRandom() {
  return Math.ceil(Math.random() * IMG_NUMBER);
}

function init() {
  const imgIndex = getRandom();
  paintImage(imgIndex);
}

init();