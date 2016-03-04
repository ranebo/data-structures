var Queue = function() {
  this._storage = {};
  this._item = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._item] = value;
  this._item++;
};

Queue.prototype.dequeue = function() {
  this._item && this._item--;
  var popped = this._storage[0];
  delete this._storage[0];

  for (var key in this._storage) {
    var count = 0;
    this._storage[count] = this._storage[key];
    count++;
  }
  return popped;
};

Queue.prototype.size = function() {
  return this._item;
};

var newQueue = new Queue();