

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var h;
  this._storage.each(function(val, key) {
    if (index === key) {
      h = new HashTable();
    }
  });

  if (h !== undefined) {
    this._storage.each(function(val, key) {
      if (index !== key) {
        h.insert(key, val);
      }
    });

  }
  this._storage = h._storage;
};



/*
 * Complexity: What is the time complexity of the above functions?
 .insert: O(1)
 .retrieve: O(1)
 .remove O(n)
 */


