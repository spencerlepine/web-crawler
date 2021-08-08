import breadthFirstSearchCrawler from '../search-algorithms/breadthFirstSearchCrawler.js';
import depthFirstSearchCrawler from '../search-algorithms/depthFirstSearchCrawler.js';

const crawlerSettings = {
  startUrl: 'https://en.wikipedia.org/wiki/Main_Page',
  followInternalLinks: false,
  searchDepthLimit: null,
  searchAlgorithm: breadthFirstSearchCrawler,
}

export default crawlerSettings;