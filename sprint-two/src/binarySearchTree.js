var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;

  newTree.insert = function(value) {
    if (newTree.value > value) {
      newTree.left === undefined ? newTree.left = BinarySearchTree(value) : newTree.left.insert(value);
    } else if (newTree.value < value) {
      newTree.right === undefined ? newTree.right = BinarySearchTree(value) : newTree.right.insert(value);
    }
  }; 

  newTree.contains = function(value) {

    if (newTree.value === value) {
      return true;
    } else if (newTree.value > value) {
      return newTree.left === undefined ? false : newTree.left.contains(value);
    } else if (newTree.value < value) {
      return newTree.right === undefined ? false : newTree.right.contains(value);
    }
  };

  newTree.depthFirstLog = function(callback) {
    newTree.value = callback(newTree.value);
    if (newTree.left !== undefined) {
      return newTree.left.depthFirstLog(callback);
    } 
    if (newTree.right !== undefined) {
      return newTree.right.depthFirstLog(callback);
    }
  };

  return newTree;
};





/*
 * Complexity: What is the time complexity of the above functions?
BinarySearchTree - CONSTANT
newTree.insert - LINEAR
newTree.contains - LINEAR
newTree.depthFirstLog - LINEAR
 */
