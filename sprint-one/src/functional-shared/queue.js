var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {}; 
  queue.first = 0;
  queue.last = 0;

  return _.extend(queue, queueMethods);

};

var queueMethods = {
  size: function() {
    return this.last - this.first;
  },
  enqueue : function(value) {
    this.storage[this.last] = value;
    this.last += 1;
  }, 
  dequeue : function() {
    if (this.last > this.first) {
    var temp = this.storage[this.first];
    delete this.storage[this.first];
      this.first++;
    }

    return temp;
  }
};
