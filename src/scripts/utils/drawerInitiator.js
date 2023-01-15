const DrawerInitiator = {
  init({ buttonOpenDrawer, appDrawer, overlay }) {
    buttonOpenDrawer.addEventListener('click', () => {
      appDrawer.classList.add('appDrawer-actived');
      overlay.removeAttribute('hidden');
      overlay.classList.add('bg-black/70');
    });

    overlay.addEventListener('click', () => {
      appDrawer.classList.remove('appDrawer-actived');
      overlay.setAttribute('hidden', '');
      overlay.classList.remove('bg-black/70');
    });

    appDrawer.addEventListener('mouseenter', () => {
      overlay.removeAttribute('hidden');
      overlay.classList.add('bg-black/70');
    });
    appDrawer.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) {
        overlay.setAttribute('hidden', '');
        overlay.classList.remove('bg-black/70');
      }
    });
  },
};

export default DrawerInitiator;
