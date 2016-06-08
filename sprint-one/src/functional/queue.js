var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 1;
  var last = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last += 1
  };

  someInstance.dequeue = function() {
    if (last-front > 0) {
      var temp = storage[front];
      front += 1;
      return temp;
    }
  };

  someInstance.size = function() {
    return last-front;
  };

  return someInstance;
};

var q = Queue();
q.enqueue('a');
q.enqueue('b');
console.log(q.size())