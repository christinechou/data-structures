var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.size = function() {
  return this.last - this.first;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last += 1;
};



