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
  },
  dequeue: function() {
    var temp = this.storage[this.first];
    if (this.last > this.first) {
      delete this.storage[this.first];
      this.first += 1;
    }
    return temp;
  }
};


