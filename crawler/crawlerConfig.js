import breadthFirstSearchWebCrawl from '../search-algorithms/breadthFirstSearchWebCrawl.js';
import depthFirstSearchCrawler from '../search-algorithms/depthFirstSearchCrawler.js';

const crawlerSettings = {
  startUrl: 'https://en.wikipedia.org/wiki/Main_Page',
  followInternalLinks: false,
  searchDepthLimit: null,
  searchAlgorithm: breadthFirstSearchWebCrawl,
}

export default crawlerSettings;