# Web Crawler with Redis Graph

[![version](https://img.shields.io/npm/v/redis-web-crawler.svg?style=flat-square)](http://npm.im/redis-web-crawler)
[![downloads](https://img.shields.io/npm/dm/redis-web-crawler.svg?style=flat-square)](http://npm-stat.com/charts.html?package=redis-web-crawler&from=2015-08-01)

Read the [blog post](https://spencerlepine.com/blog/building-a-web-crawler-with-node.js).

Web Crawler built with NodeJS. Fetch site data from a given URL and recursively follow links across the web.

Search the sites with either breadth first search, or depth first search.

Every URL will be saved to a Graph (using an adjacency list). The Graph is stored with Redis.

## Installation
```npm install --save redis-web-crawler```

## Usage
Run a local redis server to store output:
```$ redis-server```

Create a new crawler instance and pass in a configuration object. Call the ```run``` method to begin crawling.
```js
  import WebCrawler from 'redis-web-crawler';

  const crawlerSettings = {
    startUrl: 'https://en.wikipedia.org/wiki/Main_Page',
    followInternalLinks: false,
    searchDepthLimit: null,
    searchAlgorithm: "breadthFirstSearch",
  }

  var crawler = new WebCrawler(crawlerSettings);
  crawler.run();
```

### Configuration Properties

| Name                | Type      | Description                                   |
| ------------------  | --------- | ----------------------------------------------|
| startUrl            | `string`  | A valid URL off a page with links.            |
| followInternalLinks | `boolean` | Toggle searching through internal site links  |
| searchDepthLimit    | `integer` | Set a limit on the recursive URL requests     |
| searchAlgorithm     | `string`  | "breadthFirstSearch" or "depthFirstSearch"    |


## Exporting the Redis Graph
  - clone the [Redis Dump Repo](https://github.com/delano/redis-dump)
  - run commands to install gem dependencies (refer to redis-dump/README)
  - with redis server up and running:
    * note the ```slave``` and ```port``` of the ***redis-server*** (e.g. 6371)
    * in project root folder, run ```./bin/redis-dump -u 127.0.0.1:6371 > db_full.json```
    * view the Redis export in ```db_full.json```

---

> [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
