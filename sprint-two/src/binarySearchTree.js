var BinarySearchTree = function(value) {
  var tree = Object.create(BinaryTreeMethds);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var BinaryTreeMethds = {
  insert: function(value) { 
    var pointer = this;
    
    while ( pointer.value !== value) {
      if (pointer.value > value) {
        if (!pointer.left) {
          pointer.left = BinarySearchTree(value);
        }
        pointer = pointer.left;
      } else {
        if (!pointer.right) {
          pointer.right = BinarySearchTree(value);
        }
        pointer = pointer.right;
      }
    }
  },
  contains: function(value) {
    var pointer = this;

    while (pointer) {
      if (pointer.value === value) {
        return true;
      }
      if (!(pointer.left || pointer.right)) {
        return false;
      }

      if (pointer.value > value) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }

  },
  depthFirstLog: function(fn) {
    var pointer = this;

    fn(pointer.value);
    if (pointer.left !== null) {
      pointer.left.depthFirstLog(fn);
    }

    if (pointer.right !== null) {
      pointer.right.depthFirstLog(fn);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .contains :  O(log(n))
 .insert: O(log(n))
 .depthFirstLog: O(n)
 */
