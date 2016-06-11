var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  //extend treeMethods properties for all trees
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //instantiate tree with given value
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function(target) {
  var nChildren = this.children.length;

  if (this.value === target) {
    return true;
  } else if (nChildren) {
    return _.reduce(this.children, function(memo, current) {
      if (!memo) {
        memo = current.contains(target);
      }
      return memo;
    }, false);
  }

  return false;

};

treeMethods.removeFromParent = function () {
  var parentNode = this.parent;

  _.each(parentNode.children, function(child, i) {
    if (child === this) {
      parentNode.children.splice(i, 1);
    }
  });
  
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(n), linear time.
 */
