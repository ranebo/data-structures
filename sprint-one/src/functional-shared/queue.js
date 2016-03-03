var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.item = 0;
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
  this.storage[this.item] = value;
  this.item++;
};

queueMethods.dequeue = function() {
  if (this.item > 0) {
    this.item--;  
  }
  var popped = this.storage[0];
  delete this.storage[0];
  
  for (var key in this.storage) {
    count = 0;
    this.storage[count] = this.storage[key];
    count++;
  }
  return popped;
};

queueMethods.size = function() {
  return this.item;
};


