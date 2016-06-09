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

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.first];

  if(this.last > this.first) {
    delete this.storage[this.first];
    this.first += 1;
  }

  return temp;
};





