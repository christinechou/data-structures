

// Instantiate a new graph
var Graph = function() {
  this.listOfNodes = {};
  this.listOfEdges = [];
    

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.listOfNodes[node] = node;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.listOfNodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.listOfNodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.some(this.listOfEdges, function(val) {
    return ((val.to === toNode && val.from === fromNode) || (val.from === toNode && val.to === fromNode));
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = {
    to: toNode, 
    from: fromNode
  };
  this.listOfEdges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edges = this.listOfEdges;
  for (var i = 0; i < edges.length; i++ ) {
    if ((edges[i].to === fromNode && edges[i].from === toNode) || 
      (edges[i].to === toNode && edges[i].from === fromNode)) {
      edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


