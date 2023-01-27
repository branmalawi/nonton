import NontonDatabase from '../../data/nonton-database';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <div class="relative bg-no-repeat bg-top bg-[length:600px] md:bg-cover" style="background-image : url('./img/backdrop-6.webp');">
      <div class="w-full bg-green-200/20 h-96"></div>
    </div>
    <h1>this is Detail page</h1>
   `;
  },

  async afterRender() {
    const detailSrc = UrlParser.parseActiveUrlWithoutCombiner();
    const detailData = await NontonDatabase.detail(detailSrc.verb, detailSrc.id);
    console.log(detailData);
  },
};

export default Detail;
