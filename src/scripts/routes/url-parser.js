const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  parseActiveUrlForAppDrawer() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombinerWithVerb(splitedUrl);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      verb: urlsSplits[2] || null,
      id: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.verb ? '/:verb' : '')
      + (splitedUrl.id ? '/:id' : '');
  },

  _urlCombinerWithVerb(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
      + (splitedUrl.id ? '/:id' : '');
  },
};

export default UrlParser;
