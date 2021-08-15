import breadthFirstSearchCrawler from './src/search-algorithms/breadthFirstSearchCrawler.js';
import depthFirstSearchCrawler from './src/search-algorithms/depthFirstSearchCrawler.js';

const searchAlgs = {
  "breadthFirstSearch": breadthFirstSearchCrawler,
  "depthFirstSearch": depthFirstSearchCrawler,
}

class WebCrawler {
  constructor(configObj) {
    this.startUrl = configObj.startUrl;
    this.followInternalLinks = configObj.followInternalLinks;
    this.searchDepthLimit = configObj.searchDepthLimit;
    this.searchAlgorithm = searchAlgs[configObj.searchAlgorithm];
  }

  run() {
    this.searchAlgorithm(this.startUrl, this.followInternalLinks, this.searchDepthLimit);
  }
}

export default WebCrawler;