const clockConatiner = document.querySelector('#js-clock');

function pad(number) {
  return String(number).padStart(2, '0');
}
function getTime() {
  const now = new Date();
  const hours = pad(now.getHours());
  const mins = pad(now.getMinutes());
  const secs = pad(now.getSeconds());

  clockConatiner.innerHTML = `${hours}:${mins}:${secs}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();