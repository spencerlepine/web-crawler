import WebCrawler from './crawler/WebCrawler.js';
import crawlerConfig from './crawler/crawlerConfig.js';

var crawler = new WebCrawler(crawlerConfig);
crawler.run();
