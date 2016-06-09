var Stack = function() {
  this.storage = {};
  this.key = 0;
};


Stack.prototype = {
  size: function() {
    return this.key;
  }
}

// var s = new Stack();
// s.push('apple');