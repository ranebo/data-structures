var Queue = function() {
  var newQueue = {};
  newQueue._storage = {};
  newQueue._item = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._item] = value;
  this._item++;
};

queueMethods.dequeue = function() {
  this._item && this._item--; 
  var popped = this._storage[0];
  delete this._storage[0];
  
  for (var key in this._storage) {
    count = 0;
    this._storage[count] = this._storage[key];
    count++;
  }
  return popped;
};

queueMethods.size = function() {
  return this._item;
};


