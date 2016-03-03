var Queue = function() {
  this.storage = {};
  this.item = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.item] = value;
  this.item++;
};

Queue.prototype.dequeue = function() {
  if (this.item > 0) {
    this.item--;
  }
  var popped = this.storage[0];
  delete this.storage[0];

  for (var key in this.storage) {
    var count = 0;
    this.storage[count] = this.storage[key];
    count++;
  }
  return popped;
};

Queue.prototype.size = function() {
  return this.item;
};

var newQueue = new Queue();