var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack._storage = {};
  newStack._item = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._item] = value;
  this._item++;
};

stackMethods.pop = function() {
  this._item && this._item--;
  var popped = this._storage[this._item];
  delete this._storage[this._item];
  return popped;
};

stackMethods.size = function(value) {
  return this._item;
};

