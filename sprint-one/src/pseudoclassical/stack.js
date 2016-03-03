var Stack = function() {
  this.storage = {};
  this.item = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.item] = value;
  this.item++;
};

Stack.prototype.pop = function() {
  if (this.item !== 0) {
    this.item--;
  }
  var popped = this.storage[this.item];
  delete this.storage[this.item];
  return popped;
};

Stack.prototype.size = function() {
  return this.item;
};

var newStack = new Stack();

