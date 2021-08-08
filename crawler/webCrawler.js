class WebCrawler {
  constructor(configObj) {
    this.startUrl = configObj.startUrl;
    this.followInternalLinks = configObj.followInternalLinks;
    this.searchDepthLimit = configObj.searchDepthLimit;
    this.searchAlgorithm = configObj.searchAlgorithm;
  }

  run(searchAlgorithm) {
    this.searchAlgorithm(this.startUrl, this.followInternalLinks, this.searchDepthLimit);
  }
}

export default WebCrawler;