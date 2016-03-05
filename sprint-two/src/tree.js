var Tree = function(value) {
  var newTree = {};
  newTree._value = value;
  newTree._children = null;
  newTree._parent = null; 
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.removeFromParent = function(value, index) {
  index = index || 0;
  if (this._children[index]._value === value) {
    this._children.splice(index, 1);
  }
  if (this._children) {
    for (var i = 0; i < this._children.length; i++) {
      return this._children[i].removeFromParent(value, i);
    }
  }
};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild._parent = this;
  this._children ? this._children.push(newChild) : this._children = [newChild];
};

treeMethods.contains = function(target) {

  if (this._value === target) {
    return true;
  }
  if (this._children) {
    for (var i = 0; i < this._children.length; i++) {
      if (this._children[i].contains(target)) {
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
 treeMethods.contains - LINEAR
 treeMethods.removeFromParent - LINEAR
 */
