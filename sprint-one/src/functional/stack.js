var Stack = function() {
  var someInstance = {};
  var _storage = {};
  var _item = 0;

  someInstance.push = function(value) {
    _storage[_item] = value;
    _item++;
  };

  someInstance.pop = function() {
    _item && _item--;
    var popped = _storage[_item];
    delete _storage[_item];
    return popped;
  };

  someInstance.size = function() {
    return _item;
  };

  return someInstance;
};
