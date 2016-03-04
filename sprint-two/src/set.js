var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  this._storage[item] && delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 Set - CONSTANT
 setPrototype.add - CONSTANT
 setPrototype.contains - CONSTANT
 setPrototype.remove - CONSTANT
 */
