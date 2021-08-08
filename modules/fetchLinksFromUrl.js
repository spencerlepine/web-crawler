import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import { parseHostFromUrl, isInternalUrl } from './parseUrl.js';

export const fetchLinksFromUrl = async function (url, listCallback, followInternalLinks) {
  var resultDom = await fetchSiteDom(url);
  var links = getLinkListFromDom(resultDom, url, followInternalLinks);
  listCallback(links);
}

// Helper functions
const fetchSiteDom = async function (url) {
  let destinationDom;

  await fetch(url)
    .then(response => {
      return response.text();
    })
    .then(data => {
      const dom = new JSDOM(data);
      destinationDom = dom;
    })
    .catch(err => {
      console.warn('Could not fetch url: ' + url);
    });

  return destinationDom;
}

const getLinkListFromDom = function (DOM, hostUrl, includeInternalPages = false) {
  try {
    var validLinks = [];

    var linkElements = DOM && DOM.window.document.getElementsByTagName("a");
    for (var i = 0; i < linkElements.length; i++) {
      var thisElement = linkElements[i];
      var thisUrl = thisElement.href;

      if (!isInternalUrl(thisUrl, hostUrl)) {
        var validHref = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;
        if (validHref.test(thisUrl)) {
          validLinks.push(thisUrl);
        }
      } else if (includeInternalPages) {
        validLinks.push(hostUrl + thisUrl);
      }
    }

    return validLinks;
  } catch {
    return [];
  }
}