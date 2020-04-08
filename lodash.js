var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  // Place your solution here
};

 // Returns the first n number of elements in an array which will
 // create a slice of the array with n elements taken from the beginning.
_.take = function(array, n) {
	// Place your solution here
};

// Returns the very last element of the array.
_.last = function(array) {
	// Place your solution here
};

// Returns the last n number of elements in the array which will
// create a slice of array with n elements taken from the end.
_.takeRight = function(array, n) {
	// Place your solution here
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
	// Place your solution here
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	// Place your solution here
};

// Returns element with the minimum
// value from the array.
_.min = function(array) {
	// Place your solution here
};

// Returns element with the maximum
// value from array.
_.max = function(array) {
	// Place your solution here
};

// Returns the index of the first matched element or
// -1 if there is no match in the array
_.indexOf = function(array, el) {
	// Place your solution here
};

/*************** BONUS ***************/
// Retuns a new array with the elements in shuffled order.
_.shuffle = function(array) {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	// Place your solution here
};

// Iterates on each element of a collection,
// calls the callback on the element and
// then returns the original collection in its
// original state
_.forEach = function(collection, callback) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns a new array with the results of
// invoking the callback function on each element.
_.map = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with only the elements
// where there result of the callback are true.
_.filter = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with only the elements
// that return false when the callback is invoked
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of random elements from the collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
