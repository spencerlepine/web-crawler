export const parseHostFromUrl = function (url) {
  const parseUrl = url.match(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/i);

  if (parseUrl && parseUrl.length >= 5) {
    // Replace the subdomain
    let parsedHost = parseUrl[3];
    parsedHost = parsedHost.replace(/^\w+\./i, '');
    return parsedHost;
  }
}

export const isInternalUrl = function (url, hostUrl) {
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