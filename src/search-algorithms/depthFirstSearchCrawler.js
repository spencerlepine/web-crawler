import { fetchLinksFromUrl } from '../modules/fetchLinksFromUrl.js';
import graphClient from '../redis/graphClient.js';

var depthFirstSearchCrawler = async function (url, followInternalLinks, searchDepthLimit) {
  var visitedUrls = new Set();
  var searchDepthLayer = 0;

  try {
    var depthRecursionFunc = async function (innerUrl) {
      visitedUrls.add(innerUrl);
      searchDepthLayer += 1;

      var depthCallback = function (urlList) {
        urlList.forEach(thisUrl => {
          var underFetchLimit = searchDepthLimit ? searchDepthLayer < searchDepthLimit : true;

          if (!visitedUrls.has(thisUrl) && underFetchLimit) {
            // Create the edge in the graph
            graphClient.addEdge(url, thisUrl);
            depthRecursionFunc(thisUrl);
          }
        });
      }
      await fetchLinksFromUrl(innerUrl, depthCallback, followInternalLinks);
    }
    depthRecursionFunc(url);
  } catch (err) {
    console.log(err)
  }
}

export default depthFirstSearchCrawler;
