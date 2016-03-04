var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = null;
  newTree.parent = null; 
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.removeFromParent = function() {

};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this.children;
  this.children ? this.children.push(newChild) : this.children = [Tree(newChild)];
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 Tree - CONSTANT
 extend - LINEAR
 treeMethods.addChild - CONSTANT
 treemethods.contains - LINEAR
 */
