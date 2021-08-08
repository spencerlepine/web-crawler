# Web Crawler with Redis Graph
Web Crawler built with NodeJS. Fetch site data from a given URL and recursively follow links across the web.

Search the sites with either breadth first search, or depth first search.

Every URL will be saved to a Graph (using an adjacency list). The Graph is stored with Redis.

## Setup
  - ```console
    $ git clone https://github.com/spencerlepine/web-crawler.git
    $ cd web-crawler
    $ npm install```
  - Customize the web crawler configuration in ```crawler/crawlerConfig.js```
    * Choose ```breadthFirstSearch``` or ```depthFirstSearch```
    * Set the startUrl to begin crawling
    * Add a searchDepthLimit to cap URL requests
    * Activate following internal link URLs
  - Invoke the WebCrawler with ```npm start```

## Export Redis Graph
  - [Redis Dump](https://github.com/delano/redis-dump)
    * clone this Repo
    * run commands to install gem dependencies (refer to redis-dump/README)
    * in project root folder, run ```./bin/redis-dump -u 127.0.0.1:6371 > db_full.json```
    * View the json data in ```db_full.json```!
