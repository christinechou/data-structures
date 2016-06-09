var Queue = function() {

  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;

  return queue;
};

var queueMethods = {
  size: function() {
    return this.last - this.first;
  },
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last += 1;
  }
};


