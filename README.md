# Web Crawler with Redis Graph

Read the [blog post](https://spencerlepine.com/blog/building-a-web-crawler-with-node.js).

Web Crawler built with NodeJS. Fetch site data from a given URL and recursively follow links across the web.

Search the sites with either breadth first search, or depth first search.

Every URL will be saved to a Graph (using an adjacency list). The Graph is stored with Redis.

## Setup
  ```console
    $ git clone https://github.com/spencerlepine/web-crawler.git
    $ cd web-crawler
    $ npm install
  ```
  - Customize the web crawler configuration in ```crawler/crawlerConfig.js```
    * Choose ```breadthFirstSearch``` or ```depthFirstSearch```
    * Set the startUrl to begin crawling
    * Add a searchDepthLimit to cap URL requests
    * Activate following internal link URLs
  - Invoke the WebCrawler with ```npm start```

## Exporting the Redis Graph
  - clone the [Redis Dump Repo](https://github.com/delano/redis-dump)
  - run commands to install gem dependencies (refer to redis-dump/README)
  - with redis server up and running:
    * note the ```slave``` and ```port``` of the ***redis-server*** (e.g. 6371)
    * in project root folder, run ```./bin/redis-dump -u 127.0.0.1:6371 > db_full.json```
    * view the Redis export in ```db_full.json```

---

> [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
