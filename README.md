Build a web crawler (see the Nightmare Mode content from the Recursion Review repo), to crawl the webgraph  , and utilize your implementation of Kosaraju's Algorithm to identify clusters of strongly connected web sites. Present your findings in a way that is easy for humans to understand.

Make your web crawler robust enough to run overnight, recovering from failures, so that you can return in the morning with massive amounts of meaningful data.
 As your web crawler runs, store all the information it gathers in redis  . You will have to use the Node.js redis client  in order to do this.

https://learn-2.galvanize.com/cohorts/2907/blocks/81/content_files/Orientation%20&%20Precourse/exercises/recursion-review.md

// accept a url to begin the crawl
// recursivly follow links
// output the url of crawled pages

// Accept an optional configuration object as an argument that will effect the default behavior of the crawler.Consider configuring:
// The ability to use getElementsByClassName on any of the pages you visit
// The ability to output other kinds of information about the page such as number of script tags, distinct attributes, links to external sites, etc.
// The option to crawl breadth first instead of depth first
// Limit the depth or breadth of the crawl
// Set a revisit or politeness policy
// use web worker api