var LinkedList = function() {
  var list = {};
  list._length = 0;
  list._head = null;
  list._tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    newNode.previous = list._tail;
    if (list._head === null) {
      list._head = newNode;
      list._tail = newNode;
    } else {
      list._tail.next = newNode;
      list._tail = newNode;
    }
    list._length++;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    newNode.next = list._head;
    if (list._tail === null) {
      list._tail = newNode;
      list._head = newNode;
    } else {
      list._head.previous = newNode;
      list._head = newNode;
    }
    list._length++;
  };

  list.removeHead = function() {
    var remove = list._head.value;
    list._head = list._head.next;
    list._length--;
    return remove;
  };

  list.removeTail = function() {
    var remove = list._tail.value;
    list._tail = list._tail.previous;
    list._length--;
    return remove;
  };

  list.contains = function(target) {
    var check = list._head;
    for (var i = 0; i < list._length; i++) {
      if (check.value === target) {
        return true;
      }
      check = check.next;
    }
    return false;
  };
 
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 *  Complexity: What is the time complexity of the above functions?
 *  list.addTo_Tail is Constant
 *  list.AddTo_Head is Constant
 *  list.remove_Head is Constant
 *  list.remove_Tail is Constant
 *  list.contains is Linear Time
 */

