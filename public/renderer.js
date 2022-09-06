const minimizeButton = document.querySelectorAll('minimize');
minimizeButton.addEventListener('click', () => {
  window.mainBar.minimize();
});
// const maximizeButton = document.querySelectorAll('maximize');
export const maximizeButton = () => {
  maximizeButton.classList.add('hidden');
  // unmaximizeButton.classList.remove('hidden');
  window.mainBar.maximize();
};

export const unmaximizeButton = () => {
  unmaximizeButton.classList.add('hidden');
  maximizeButton.classList.remove('hidden');
  window.mainBar.unmaximize();
};

const closeButton = document.querySelectorAll('close');
closeButton.addEventListener('click', () => {
  window.mainBar.close();
});
