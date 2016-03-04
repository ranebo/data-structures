var Queue = function() {
  var someInstance = {};
  var _storage = {};
  var _item = 0;

  someInstance.enqueue = function(value) {
    _storage[_item] = value;   
    _item++;
  };

  someInstance.dequeue = function() {
    if (_item !== 0) {
      _item--;
    }
    var popped = _storage[0];
    delete _storage[0];

    for (var key in _storage) {
      count = 0;
      _storage[count] = _storage[key];
      count++;
    }

    return popped;
  };

  someInstance.size = function() {
    return _item;
  };

  return someInstance;
};

