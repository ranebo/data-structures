 

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = { 
    'value' : node, 
    'edges' : []
  };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      delete this.graph[key].value;
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.graph[fromNode].edges.length; i++) {
    if (this.graph[fromNode].edges[i] === toNode) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edges.push(toNode);
  this.graph[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.graph[fromNode].edges.length; i++) {
    if (this.graph[fromNode].edges[i] === toNode) {
      delete this.graph[fromNode].edges[i];
    }
  }
  for (var i = 0; i < this.graph[toNode].edges.length; i++) {
    if (this.graph[toNode].edges[i] === fromNode) {
      delete this.graph[toNode].edges[i];
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graph) {
    cb(this.graph[node].value);
  }
};


var newGraph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 Graph - CONSTANT
 Graph.prototype.addNode - CONSTANT
 Graph.prototype.contains - LINEAR
 Graph.prototype.removeNode - LINEAR
 Graph.prototype.hasEdge - LINEAR
 Graph.prototype.addEdge - CONSTANT
 Graph.prototype.removeEdge - LINEAR
 Graph.prototype.forEachNode - LINEAR
 */


