var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.key = 0;
  return _.extend(stack, stackMethods);
};

var stackMethods = {
  size: function() {
    return this.key;
  }
};


