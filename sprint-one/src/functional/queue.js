var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last += 1;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
