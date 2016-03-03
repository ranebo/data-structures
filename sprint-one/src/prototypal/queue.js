var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.item = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.item] = value;
  this.item++;
};

queueMethods.dequeue = function() {
  if (this.item !== 0) {
    this.item--;
  }
  var popped = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    var counter = 0;
    this.storage[counter] = this.storage[key];
    counter++;
  }
  return popped;
};

queueMethods.size = function() {
  return this.item;
}; 
