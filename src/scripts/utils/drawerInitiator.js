const drawer = {
  init({ buttonToggle, appDrawer, content }) {
    buttonToggle.addEventListener('click', () => {
      appDrawer.classList.toggle('drawer-active');
    });

    content.addEventListener('click', () => {
      appDrawer.classList.remove('drawer-active');
    });
  },
};

export default drawer;
