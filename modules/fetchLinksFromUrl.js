export const fetchLinksFromUrl = async function (url) {
  var resultDom = await fetchSiteDom(hostUrl);
  var links = getLinkListFromDom(resultDom, hostUrl);
  return links'
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

      if (!isInternalUrl(thisUrl, hostUrl)) {
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