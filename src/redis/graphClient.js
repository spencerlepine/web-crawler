import redis from 'redis';
const client = redis.createClient();

client.on('error', function (error) {
  console.error(error);
});

class RedisGraph {
  constructor(client) {
    this.client = client;
  }

  addEdge(from, to) {
    const fromList = from;
    const desitnation = to;
    this.client.rpush.apply(client, [fromList, desitnation]);
  }

  removeEdge(from, to) {
    this.client.lrem(from, 0, to, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  logNodeEdges(urlStringNode) {
    console.log('\n');
    this.client.lrange(urlStringNode, 0, -1, function (error, items) {
      if (error) throw error

      items.forEach(function (item) {
        console.log(item);
      })
    })
    console.log('\n');
  }
};

const graphClient = new RedisGraph(client);

export default graphClient;