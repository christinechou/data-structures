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
  }, 
  push: function(value) {
    this.storage[this.key] = value;
    this.key += 1;
  },
  pop: function() {
    var temp = this.storage[this.key - 1];
    delete this.storage[this.key - 1];
    if (this.key > 0) {
      this.key -= 1;
    }
    return temp;
  }
};