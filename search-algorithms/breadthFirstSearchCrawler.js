import Stack from '../data-structures/Stack.js';
import { fetchLinksFromUrl } from '../modules/fetchLinksFromUrl.js';
import graphClient from '../redis/graphClient.js';

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
        urlList.forEach(newUrl => {
          if (!visitedUrls.has(newUrl)) {
            visitedUrls.add(newUrl);
            // Create the edge in the graph
            graphClient.addEdge(url, newUrl);
            queue.push(newUrl);
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
