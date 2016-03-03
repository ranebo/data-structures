var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.item = 0;
  extend(newStack, stackMethods);
  return newStack;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.item] = value;
  this.item++;
};

stackMethods.pop = function() {
  if (this.item !== 0) {
    this.item--;
  }
  var popped = this.storage[this.item];
  delete this.storage[this.item];
  return popped;
};

stackMethods.size = function() {
  return this.item;

};


