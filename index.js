import WebCrawler from './webCrawler.js';
import breadthFirstSearchWebCrawl from './search-algorithms/breadthFirstSearchWebCrawl.js';
import depthFirstSearchCrawler from './search-algorithms/depthFirstSearchCrawler.js';
import crawlerConfig from './crawlerConfig.js';

var crawler = new WebCrawler(crawlerConfig);
crawler.run(breadthFirstSearchWebCrawl);
