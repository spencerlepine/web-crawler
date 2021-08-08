import Stack from '../data-structures/stack.js';
import { fetchLinksFromUrl } from '../modules/fetchLinksFromUrl.js';

var breadthFirstSearchWebCrawl = async function (url, followInternalLinks, searchDepthLimit) {
  var visitedUrls = new Set();
  var currentUrl = url;
  var queue = new Stack();
  queue.push(currentUrl);

  try {
    var fetchCount = 0;
    var underFetchLimit = searchDepthLimit ? fetchCount < searchDepthLimit : true;

    while (queue.size() > 0 && underFetchLimit) {
      currentUrl = queue.pop();

      var queueCallback = function (urlList) {
        urlList.forEach(url => {
          if (!visitedUrls.has(url)) {
            visitedUrls.add(url);
            console.log(url);
            queue.push(url);
          }
        });
      }
      fetchCount += 1;
      await fetchLinksFromUrl(currentUrl, queueCallback, followInternalLinks);
    }
  } catch (err) {
    console.log(err)
  }
}

export default breadthFirstSearchWebCrawl;
