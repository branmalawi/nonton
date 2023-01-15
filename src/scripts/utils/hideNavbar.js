const HideNavbar = {
  init({ navbar }) {
    this.offsetYOld = 0;
    window.addEventListener('scroll', (event) => {
      if (window.innerWidth < 640) {
        this.offsetYNew = window.scrollY;
        if (this.offsetYNew > this.offsetYOld) {
          this._scrollTop(event, navbar);
        } else {
          this._scrollBottom(event, navbar);
        }
        this.offsetYOld = this.offsetYNew;
      }
    });
  },

  _scrollTop(event, navbar) {
    event.stopPropagation();
    navbar.classList.add('translate-y-[-100%]');
  },

  _scrollBottom(event, navbar) {
    event.stopPropagation();
    navbar.classList.remove('translate-y-[-100%]');
  },
};

export default HideNavbar;
