const DrawerInitiator = {
  init({ buttonOpenDrawer, appDrawer, overlay }) {
    buttonOpenDrawer.addEventListener('click', () => {
      appDrawer.classList.add('appDrawer-actived');
      overlay.removeAttribute('hidden');
      overlay.classList.add('bg-black/50');
    });

    overlay.addEventListener('click', () => {
      appDrawer.classList.remove('appDrawer-actived');
      overlay.setAttribute('hidden', '');
      overlay.classList.remove('bg-black/60');
    });
  },
};

export default DrawerInitiator;
