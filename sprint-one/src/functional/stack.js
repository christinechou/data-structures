var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    key += 1;
    storage[key] = value;
  };

  someInstance.pop = function() {
    if (key > 0) {
      var storedVal = storage[key]
      storage[key] = undefined;
      key -= 1;
      return storedVal;
    } 
  };

  someInstance.size = function() {
    return key
  };

  return someInstance;
};

var myStack = Stack();
myStack.push('apple');
myStack.push('bananas');
// console.log(myStack.pop());
// console.log(myStack.size())