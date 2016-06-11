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
      if(pointer.value === value) {
        return true;
      }
      if(!(pointer.left || pointer.right) && pointer.value !== value){
        return false;
      }

      if (pointer.value < value) {
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
  depthFirstLog: function() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
