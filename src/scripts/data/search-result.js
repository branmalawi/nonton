import API_ENDPOINT from '../globals/api-endpoint';

class SearchResult {
  static async search(keyword, page = 1) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword, page));
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default SearchResult;
