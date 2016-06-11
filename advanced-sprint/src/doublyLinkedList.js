var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    //link new node to beginning of linked list
    var node = Node(value);
    if ( !this.head ) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.addToTail = function(value) {
    //link new node to end of linked list
    var node = Node(value);
    if ( !this.head ) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    //remove node at head and set previous head.next as head
    var temp = this.head.value;
    this.head = this.head.next;
    if ( !this.head ) {
      this.tail = null;
    };
    return temp;

  };

  list.contains = function(target) {
    //loop through the linked list to find the target value
    var node = this.head;
    return traverseNode(node);

    function traverseNode(node) {
      if (node.value === target) {
        return true;
      }
      else if (node.next !== null) {
        return traverseNode(node.next);
      }
      return false;
    }
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
 * Complexity: What is the time complexity of the above functions?

  Linear time.  O(n).  Run time increases with the size of the input.

 */
