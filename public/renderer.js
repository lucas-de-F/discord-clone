const minimizeButton = document.getElementById('minimize');
minimizeButton.addEventListener('click', () => {
  window.mainBar.minimize();
});
const unmaximizeButton = document.getElementById('unmaximize');
const maximizeButton = document.getElementById('maximize');
maximizeButton.addEventListener('click', () => {
  maximizeButton.classList.add('hidden');
  unmaximizeButton.classList.remove('hidden');
  window.mainBar.maximize();
});

unmaximizeButton.addEventListener('click', () => {
  unmaximizeButton.classList.add('hidden');
  maximizeButton.classList.remove('hidden');
  window.mainBar.unmaximize();
});

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
  window.mainBar.close();
});
