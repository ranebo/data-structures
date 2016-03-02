var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var item = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[item] = value;   
    item++;
  };

  someInstance.dequeue = function() {
    if (item !== 0) {
      item--;
    }
    var popped = storage[0];
    delete storage[0];

    for (var key in storage) {
      count = 0;
      storage[count] = storage[key];
      count++;
    }

    return popped;
  };

  someInstance.size = function() {
    return item;
  };

  return someInstance;
};

