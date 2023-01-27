class ImageItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="aspect-[3/4] rounded-xl bg-slate-300 dark:bg-gray-600"></div>
    <div class="w-[80%] h-3 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-[3px]"></div>
    <div class="w-2/3 h-2 rounded-full bg-slate-300 dark:bg-gray-500 mt-2 ml-[3px]"></div>
    `;
  }
}

customElements.define('image-item-skeleton', ImageItemSkeleton);
export default ImageItemSkeleton;
