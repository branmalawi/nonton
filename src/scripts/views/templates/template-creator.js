/* eslint-disable import/prefer-default-export */
// import CONFIG from '../../globals/config';

const createResultSearchTemplate = (result) => `
  <li class="flex items-center justify-start my-[10px]">
    <img src="./icon/${result.media_type}.svg" height="24" width="24" class="ml-2 mr-3 brightness-0 opacity-75"></img>
    <span class="text-base font-regular text-dark/70">${result.title || result.name}</span>  
  </li>
  `;

const createPreviousResultSearchTemplate = (name) => `
  <li class="flex items-center justify-start my-[10px]">
    <img src="./icon/previous-result.svg" height="24" width="24" class="ml-2 mr-3 brightness-0 opacity-75"></img>
    <span class="text-base font-regular text-dark/70">${name}</span>  
  </li>
  `;

export {
  createResultSearchTemplate,
  createPreviousResultSearchTemplate,
};
