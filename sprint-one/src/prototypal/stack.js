var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.key = 0;

  return stack;
};

var stackMethods = {
  size : function() {
    return this.key;
  }, 
  pop : function() {
    var temp = this.storage[this.key - 1];
    if(this.key > 0){
      delete  this.storage[this.key];
      this.key -= 1;
    }
    
    return temp;
  }, 
  push : function(value) {
    this.storage[this.key] = value;
    this.key += 1;
  }
};
