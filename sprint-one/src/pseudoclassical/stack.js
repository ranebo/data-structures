var Stack = function() {
  this._storage = {};
  this._item = 0;
};

Stack.prototype.push = function(value) {
  this._storage[this._item] = value;
  this._item++;
};

Stack.prototype.pop = function() {
  this._item && this._item--;
  var popped = this._storage[this._item];
  delete this._storage[this._item];
  return popped;
};

Stack.prototype.size = function() {
  return this._item;
};

var newStack = new Stack();

