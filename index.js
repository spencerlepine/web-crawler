import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

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
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });

  return destinationDom;
}

const getLinkListFromDom = function (DOM, hostUrl, includeInternalPages = false) {
  try {
    var validLinks = [];

    var linkElements = DOM.window.document.getElementsByTagName("a");
    for (var i = 0; i < linkElements.length; i++) {
      var thisElement = linkElements[i];
      var thisUrl = thisElement.href;

      if (!isInternalRegex(thisUrl, hostUrl)) {
        validLinks.push(thisUrl);
      } else if (includeInternalPages) {
        validLinks.push(hostUrl + thisUrl);
      }
    }

    return validLinks;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const parseHostFromUrl = function (url) {
  const parseUrl = url.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/i);

  if (parseUrl && parseUrl.length >= 5) {
    // Replace the subdomain
    let parsedHost = parseUrl[3];
    parsedHost = parsedHost.replace(/^\w+\./i, '');
    return parsedHost;
  }
}

const isInternalRegex = function (url, hostUrl) {
  const parsedCurrent = parseHostFromUrl(url);
  const parsedHost = parseHostFromUrl(hostUrl);

  if (parsedCurrent && parsedHost) {
    const internalRouteRe = new RegExp(/^(\/\w+)+/, 'i');
    const isRoute = internalRouteRe.test(url);
    const isSubdomain = parsedCurrent === parsedHost;
    return isRoute || isSubdomain;
  }
  return false;
};

var hostUrl = 'https://en.wikipedia.org/wiki/Main_Page';
var resultDom = await fetchSiteDom(hostUrl);
var links = getLinkListFromDom(resultDom, hostUrl);
console.log(links)
console.log(`${hostUrl} returned ${links.length} link(s) to follow`);