import Stack from '../data-structures/stack.js';
import { fetchLinksFromUrl } from '../modules/fetchLinksFromUrl.js';

var depthFirstSearchCrawler = async function (url, followInternalLinks, searchDepthLimit) {
  var visitedUrls = new Set();
  var searchDepthLayer = 0;

  try {
    var depthRecursionFunc = async function (innerUrl) {
      visitedUrls.add(innerUrl);
      searchDepthLayer += 1;

      var depthCallback = function (urlList) {
        urlList.forEach(thisUrl => {
          if (!visitedUrls.has(thisUrl) && searchDepthLayer < searchDepthLimit) {
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
