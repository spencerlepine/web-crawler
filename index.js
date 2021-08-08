import { fetchLinksFromUrl } from './modules/fetchLinksFromUrl.js';

var startUrl = 'https://en.wikipedia.org/wiki/Main_Page';
var followInternalLinks = false;


var visitedUrls = new Set();
var currentUrl = startUrl;
var queue = [currentUrl];

try {
  while (queue.length > 0) {
    currentUrl = queue.shift();

    var queueCallback = function (urlList) {
      urlList.forEach(url => {
        if (!visitedUrls.has(url)) {
          visitedUrls.add(url);
          console.log(url);
          queue.push(url);
        }
      });
    }
    await fetchLinksFromUrl(currentUrl, queueCallback, followInternalLinks);
  }
} catch (err) {
  console.log(err)
}