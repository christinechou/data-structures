

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var stor = this._storage;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = stor.get(index);
  var keyValIndexToReplace;

  if (!buckets) {
    stor.set(index, []);
    buckets = stor.get(index);
  }
  var hasKey = _.some(buckets, function(val, i) {
    if (val[0] === k) {
      keyValIndexToReplace = i;
    }
    return val[0] === k;
  });
  if (hasKey) {
    buckets[keyValIndexToReplace] = [k,v];
  } else {
    buckets.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var stor = this._storage;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = stor.get(index);

  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i][0] === k) {
      return buckets[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var stor = this._storage;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = stor.get(index);
  var newBucket = [];
  _.each(buckets, function(keyval, i) {
    if (keyval[0] !== k) {
      newBucket.push(keyVal);
    }
  });
  stor.set(index, newBucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 .insert: O(1)
 .retrieve: O(1)
 .remove O(1)
 */


