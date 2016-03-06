
var HashTable = function() {
  this._items = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this._items++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newTuple = [k, v];
  var bucket = this._storage.get(index);

  if (bucket) {
    for ( var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push(newTuple);
      }
    }
  } else {
    this._storage.set(index, [newTuple]);
  }

  // if (this._items / this._limit >= 0.75 ) {
  //   this.resize(this._limit * 2);
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for ( var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};


HashTable.prototype.remove = function(k) {
  this._items && this._items--;
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for ( var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }

  // if (this._items) {
  //   if (this._items / this._limit <= 0.25 ) {
  //     console.log(this._items / this._limit)
  //     this.resize(this._limit / 2).bind(this);
  //   }
  // }
};  

HashTable.prototype.resize = function(newLimit) {



// //USING TEMP SWAP
// //*********************************************************** 
//   // var temp = this._storage;
//   // this._storage = LimitedArray(newLimit);
//   // var oldStorage = temp;

//   // this._limit = newLimit;
//   // console.log(this._storage.each)
//   oldStorage.each(function(bucket) {
//     console.log(bucket, "HELLO");
//     // if (bucket) {
//     //   for (var tuple = 0; tuple < bucket.length; tuple++) {
//     //     var key = bucket[tuple][0];
//     //     var value = bucket[tuple][1];
//     //     this.insert(key, value);
//     //   }
//    //// }
//   });
// //******************************************************


//USING TEMP ARRAY
//***************************************************
  // var temp = [];
  // this._storage.each(function(bucket) {
  //   if (bucket) {
  //     for (var tuple = 0; tuple < bucket.length; tuple++) {
  //       var key = bucket[tuple][0];
  //       var value = bucket[tuple][1];
  //       temp.push([key, value]);
  //     }
  //   }
  // });

  // this._storage = LimitedArray(newLimit);
  // this._limit = newLimit;
  // for (var i = 0; i < temp.length; i++) {
  //   this.insert(temp[i][0], temp[i][1]);
  // }
  //************************************************
};


/*
 * Complexity: What is the time complexity of the above functions?
Hashtable - CONSTANT
HashTable.prototype.insert - LINEAR
HashTable.prototype.retrieve - LINEAR
HashTable.prototype.remove - LINEAR
 */


