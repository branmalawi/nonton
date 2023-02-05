/* eslint-disable no-const-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { prominent, average } from 'color.js';

const InitialColorImage = {
  async init(srcImage) {
    const img = new Image();
    const gglUrl = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
    img.src = gglUrl + encodeURIComponent(srcImage);
    img.crossOrigin = 'Anonymous';
    const color = async () => {
      const data = await prominent(img, { amount: 3 });
      return data;
    };
    const colorData = await color();
    return {
      bgColor: colorData[1],
      textColor: this.checkContrast(colorData[1]),
    };
  },

  checkContrast(data) {
    const result = ((data[0] + data[1] + data[2]) / 3);
    if (result > 127) {
      return '#000000';
    }
    return '#ffffff';
  },
};

export default InitialColorImage;
