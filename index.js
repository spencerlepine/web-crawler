import WebCrawler from './crawler/WebCrawler.js';
import crawlerConfig from './crawler/crawlerConfig.js';
import breadthFirstSearchWebCrawl from './search-algorithms/breadthFirstSearchWebCrawl.js';
import depthFirstSearchCrawler from './search-algorithms/depthFirstSearchCrawler.js';

var crawler = new WebCrawler(crawlerConfig);
crawler.run(depthFirstSearchCrawler);
