/* eslint-disable no-const-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { prominent, average } from 'color.js';

const img = new Image();
const imgUrl = 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg';
const ggUrl = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
img.src = ggUrl + encodeURIComponent(imgUrl);
img.crossOrigin = 'Anonymous';
const color = async () => {
  const data = await prominent(img, { amount: 3 });
  return data;
};

const InitialColorImage = {
  async init({ main }) {
    main.innerHTML = '';
    main.innerHTML += `
      <img src="${imgUrl}" alt="" class="w-[250px] rounded-md"/>`;
    let colorData = await color();
    colorData = colorData[2];
    // colorData.forEach((data) => {
    //   main.innerHTML += `
    //       <div class="w-16 h-16 rounded-md inline-block" style="background-color: rgb(${data[0]},${data[1]},${data[2]});"></div>
    //     `;
    // });
    main.innerHTML += `
        <div class="w-16 h-16 rounded-md inline-block" style="background-color: rgb(${colorData[0]},${colorData[1]},${colorData[2]});"></div>
      `;

    const contrast = this.checkContrast(colorData);
    main.innerHTML += `
        <div class="w-16 h-16 rounded-md inline-block" style="background-color: ${contrast};"></div>
      `;
  },

  checkContrast(data) {
    const result = ((data[0] + data[1] + data[2]) / 3);
    if (result > 127) {
      return '#000';
    }
    return '#fff';
  },
};

export default InitialColorImage;
