var Stack = function() {
  var stack = Object.create(Stack.stackMethods);
  stack.key = 0;

  return stack;
};

var stackMethods = {
  size : function() {
    return this.key;
  }
};

Stack.stackMethods = stackMethods;

