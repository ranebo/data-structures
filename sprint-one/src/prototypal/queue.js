var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue._storage = {};
  newQueue._item = 0;
  return newQueue;
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
    var counter = 0;
    this._storage[counter] = this._storage[key];
    counter++;
  }
  return popped;
};

queueMethods.size = function() {
  return this._item;
}; 
