/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
class RateBar extends HTMLElement {
  connectedCallback() {
    this.value = parseInt(this.getAttribute('value'), 10);
    this.dasharray = 0;
    this.dashoffset = 0;
    this.colors = [
      {
        colOne: '#28c0f0',
        colTwo: '#30f8f0',
      },
      {
        colOne: '#FF512F',
        colTwo: '#F09819',
      },
      {
        colOne: '#FF5858',
        colTwo: '#F857A6',
      },
    ];
    // this.colors = [['#28c0f0',
    //   '#30f8f0'],
    // ['#FF512F',
    //   '#F09819'],
    // ['#FF5858',
    //   '#F857A6'],
    // ];
    this.color = [];
    this.colID = new Date().getTime();
    this.process();
  }

  render() {
    this.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="absolute rotate-[-90deg] top-0 right-0 w-full aspect-square fill-transparent stroke-[10%]">
    <defs>
    <linearGradient id="${this.colID}">
    <stop offset="0%" stop-color="${this.color.colOne}" />
    <stop offset="100%" stop-color="${this.color.colTwo}" />
    </linearGradient>
    </defs>
    <circle r="45%" cx="50%" cy="50%" stroke-linecap="round" style="stroke:url('#${this.colID}'); stroke-dasharray: ${this.dasharray}; stroke-dashoffset: ${this.dashoffset};" class = ""/>
    </svg>
    <p class="absolute bottom-[47%] right-1/2 translate-y-1/2 translate-x-1/2 font-bold">
    ${this.value}
    </p>
    `;

    this.addEventListener('resize', () => {
      this.process();
    });
  }

  process() {
    const width = parseInt(window.getComputedStyle(this).width, 10);
    const around = 2 * 3.14 * (45 * width / 100);
    this.dasharray = `${around}px`;
    this.dashoffset = `${(100 - this.value) / 100 * around}px`;
    this.color = this.value < 40 ? this.colors[2] : this.value < 70 ? this.colors[1] : this.colors[0];
    this.render();
  }
}

customElements.define('rate-bar', RateBar);
export default RateBar;
