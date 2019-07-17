const Graph = require('../data-structures/graph.js');

let graph = new Graph(3);
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');

graph.addEdge('b', 'a');
graph.addEdge('c', 'a');

graph.printGraph();

