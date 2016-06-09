var Stack = function() {
  this.storage = {};
  this.key = 0;
};


Stack.prototype.size = function() {
  return this.key;
};

Stack.prototype.push = function(value) {
  this.storage[this.key] = value;
  this.key += 1;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.key - 1];
  if (this.key > 0) {
    delete this.storage[this.key - 1];
    this.key -= 1;
  }
  return temp;
};