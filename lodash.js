const _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 /**
 * @name - _.first
 * @description - Returns the first element of an array.
 * @param - array
 * @return - first element in input array
 **/
_.first = function(array) {
  // Place your solution here
};

/**
 * @name - _.take
 * @description - Returns the first n number of elements 
 *                in an array which will create a slice 
 *                of the array with n elements taken from
 *                the beginning.
 * @param.1 - array
 * @param.2 - number
 * @return - element in array located at index n
 **/
_.take = function(array, n) {
	// Place your solution here
};

/**
 * @name - _.last
 * @description - Returns the last element of an array.
 * @param - array
 * @return - last element in the input array
 **/
_.last = function(array) {
	// Place your solution here
};

/**
 * @name - _.takeRight
 * @description - Returns the last n number of elements
 *                in an array which will create a slice of
 *                array with n elements taken from the end.
 * @param.1 - array
 * @param.2 - number
 * @return - array with last n elements from input array
 **/
_.takeRight = function(array, n) {
	// Place your solution here
};

/**
 * @name - _.compact
 * @description - Returns a new array with all falsy values removed.
 *                falsy values: false, null, 0, "", undefined, and NaN.
 *                Example:
 *                _.compact([0, 1, false, 2, '', 3]);
 *                → [1, 2, 3]
 * @param - array
 * @return - array containing only truthy values
 **/
_.compact = function(array) {
	// Place your solution here
};

/**
 * @name - _.difference
 * @description - Returns a new array of elements in the first argument, but
 *                excludes any element found in the second argument.
 *                Example:
 *                _.difference([1, 2, 3], [4, 2]);
 *                → [1, 3]
 * @param.1 - array
 * @param.2 - array
 * @return - array containing only the elements of the first input that are not
 *           found in the second array
 **/
_.difference = function(arrayOne, arrayTwo) {
	// Place your solution here
};

/**
 * @name - _.min
 * @description - Returns the element with the minimum value in an array.
 * @param - array
 * @return - element with minimum value
 **/
_.min = function(array) {
	// Place your solution here
};

/**
 * @name - _.max
 * @description - Returns the element with the maximum value in an array.
 * @param - array
 * @return - element with maximum value
 **/
_.max = function(array) {
	// Place your solution here
};

/**
 * @name - _.indexOf
 * @description - Returns either index of matched element or -1.
 * @param.1 - array
 * @param.2 - element
 * @return - number index if element is found; -1 if not found.
 **/
_.indexOf = function(array, el) {
	// Place your solution here
};

/**
 * @name - _.reduce
 * @description - Applies a callback to each element and adds the result
 *                to an accumulator.
 * @param.1 - array
 * @param.2 - callback function
 * @param.3 - (optional) initial value of accumulator
 * @return - value stored in the accumulator
 **/
_.reduce = function(array, callback, accumulator) {
	// Place your solution here
};

/*************** BONUS ***************/
/**
 * @name - _.shuffle
 * @description - Retuns a new array with elements in shuffled order.
 * @param - array
 * @return - array containing all the original elements in a random order
 **/
_.shuffle = function(array) {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
/**
 * @name - _.size
 * @description - Returns the length of a collection.
 * @param - array, object or string
 * @return - number representing the iterable length of the input collection
 **/
_.size = function(collection) {
	// Place your solution here
};

/**
 * @name - _.forEach
 * @description - Iterates on each element of a collection and then
 *                returns the original collection.
 * @param.1 - array, object or string
 * @param.2 - callback function
 * @return - no return; this function just iterates through the data
 *           and performs the callback function on each
 **/
_.forEach = function(collection, callback) {
	// Place your solution here
};

/**
 * @name - _.map
 * @description - Iterates on each element of a collection and
 *                then returns a new array.
 * @param.1 - array, object or string
 * @param.2 - callback function
 * @return - array of elements that are the result of executing the
 *           callback function on each element in the input collection
 **/
_.map = function(collection, callback) {
	// Place your solution here
};

/**
 * @name - _.filter
 * @description - Returns a new collection with filtered elements.
 * @param.1 - array, object or string
 * @param.2 - callback function
 * @return - array of elements that returned true after executing
 *           callback function on each element in the input collection
 **/
_.filter = function(collection, callback) {
	// Place your solution here
};

/**
 * @name - _.reject
 * @description - Returns a new collection with unfiltered elements.
 * @param.1 - array, object or string
 * @param.2 - callback function
 * @return - array of elements that returned false after executing
 *           callback function on each element in the input collection
 **/
_.reject = function(collection, callback) {
	// Place your solution here
};

/**
 * @name - _.every
 * @description - Returns a new collection with unfiltered elements.
 * @param.1 - array
 * @param.2 - callback function
 * @return - boolean
 **/
_.every = function(array, callback) {
 // Place your solution here
};

/*************** BONUS ***************/
/**
 * @name - _.sample
 * @description - Returns n number of random elements in a collection.
 * @param.1 - array, object or string
 * @param.2 - number
 * @return - array containing n random elements from the input collection
 **/
_.sample = function(collection, n) {
	// Place your solution here
};

/**
 * @name - _.objectToArray
 * @description - Converts an object into an array of arrays. Each nested array
 *                contains a key and value pair from the input object.
 * @param - object
 * @return - number representing the iterable length of the input collection
 **/
_.objectToArray = function(obj) {
	// Place your solution here
};

module.exports = _;
