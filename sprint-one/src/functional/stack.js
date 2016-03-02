var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var item = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[item] = value;
    item++;
  };

  someInstance.pop = function() {
    if (item !== 0) {
      item--;
    }
    var popped = storage[item];
    delete storage[item];
    return popped;
  };

  someInstance.size = function() {
    return item;
  };

  return someInstance;
};
