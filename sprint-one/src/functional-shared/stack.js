var Stack = function() {
  var newStack = {};
  newStack._storage = {};
  newStack._item = 0;
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._item] = value;
  this._item++;
};

stackMethods.pop = function() {
  if (this._item !== 0) {
    this._item--;
  }
  var popped = this._storage[this._item];
  delete this._storage[this._item];
  return popped;
};

stackMethods.size = function() {
  return this._item;

};
