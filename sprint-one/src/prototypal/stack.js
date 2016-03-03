var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.item = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.item] = value;
  this.item++;
};

stackMethods.pop = function() {
  if (this.item > 0) {
    this.item--;
  }
  var popped = this.storage[this.item];
  delete this.storage[this.item];
  return popped;
};

stackMethods.size = function(value) {
  return this.item;
};

