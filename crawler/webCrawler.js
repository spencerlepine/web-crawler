class WebCrawler {
  constructor(configObj) {
    this.startUrl = configObj.startUrl;
    this.followInternalLinks = configObj.followInternalLinks;
    this.searchDepthLimit = configObj.searchDepthLimit;
  }

  run(searchAlgorithm) {
    searchAlgorithm(this.startUrl, this.followInternalLinks, this.searchDepthLimit);
  }
}

export default WebCrawler;