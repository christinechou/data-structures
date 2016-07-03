

// Instantiate a new graph
var Graph = function() {
  this.listOfNodes = {};
  // this.listOfEdges = [];

};

// var g = Graph();
// g.addNode('apple');
// {edges: {
//   fromNode: 
//   toNode:
// }}

// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   // this.listOfNodes[node] = node;
//   this.listOfNodes[node] = node || {edges: {}}

// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   return this.listOfNodes.hasOwnProperty(node);
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   //check if contains node
//   //remove node 
//   delete this.listOfNodes[node];
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   //if the node contains edge, return false
//   if (!this.contains(fromNode)) {
//     return false;
//   }
//   //otherwise return the toNode edge on node;

//   // my solution:
//   // return _.some(this.listOfEdges, function(val) {
//   //   return ((val.to === toNode && val.from === fromNode) || (val.from === toNode && val.to === fromNode));
//   // });
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   var edge = {
//     to: toNode, 
//     from: fromNode
//   };
//   this.listOfEdges.push(edge);
// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
//   var edges = this.listOfEdges;
//   for (var i = 0; i < edges.length; i++ ) {
//     if ((edges[i].to === fromNode && edges[i].from === toNode) || 
//       (edges[i].to === toNode && edges[i].from === fromNode)) {
//       edges.splice(i, 1);
//     }
//   }
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   for (var key in this.listOfNodes) {
//     cb(this.listOfNodes[key]);
//   }
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  addNode: O(1)
//  contains: O(1)
//  removeNode: O(1)
//  hasEdge: O(n)
//  addEdge: O(1)
//  removeEdge: O(n)
//  forEachNode: O(n)
//  */


