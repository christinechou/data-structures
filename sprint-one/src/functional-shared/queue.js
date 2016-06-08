var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {}; 
  queue.first = 0;
  queue.last = 0;

  return _.extend(queue, Queue.queueMethods);

};



Queue.queueMethods = {
  size: function() {
    return this.last - this.first;
  },
  enqueue : function(value) {
    this.storage[this.last];
    this.last += 1;
  }
};
