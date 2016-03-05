
var HashTable = function() {
  this._items = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this._items++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newTuple = [k, v];
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push(newTuple);
      }
    }
  } else {
    this._storage[index] = [newTuple];
  }
  if (this._items / this._limit > 0.75 ) {
    this._limit = this._limit * 2;
    this.resize(this._limit);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  this._items && this._items--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      delete this._storage[index][i][0];
    }
  }
  if (this._items / this._limit < 0.25 ) {
    this._limit = this._limit / 2;
    this.resize(this._limit);
  }
};  

Hashtable.prototype.resize = function(newLimit) {  
  var newStorage = LimitedArray(newLimit);
  for (var i = 0; i < this._storage.length; i++) {
    for (var j = 0; j < this._storage[i].length; j++) {
      var k = this._storage[i][j][0];
      var v = this._storage[i][j][1];
      var index = getIndexBelowMaxForKey(k, newLimit);
      var newTuple = [k, v];  
      if (newStorage[index]) {
        for (var i = 0; i < newStorage[index].length; i++) {
          if (newStorage[index][i][0] === k) {
            newStorage[index][i][1] = v;
          } else {
            newStorage[index].push(newTuple);
          }
        }
      } else {
        newStorage[index] = [newTuple];
      }
    }
  }
  this._storage = newStorage;
};

/*
 * Complexity: What is the time complexity of the above functions?
Hashtable - CONSTANT
HashTable.prototype.insert - LINEAR
HashTable.prototype.retrieve - LINEAR
HashTable.prototype.remove - LINEAR
 */


