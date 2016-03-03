var LinkedList = function() {
  var list = {};
  list.length = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    list.length++;
  };

  list.removeHead = function() {
    var remove = list.head.value;
    list.head = list.head.next;
    list.length--;
    return remove;
  };

  list.contains = function(target) {
    var check = list.head;
    for (var i = 0; i < list.length; i++) {
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

  return node;
};

/*
 *  Complexity: What is the time complexity of the above functions?
 *  list.addToTail is Constant
 *  list.removeHead is Constant
 *  list.contains is Linear Time
 */

