const assert = require('chai').assert

const _ = require('../lodash');

/**************************************
 *************** ARRAYS ***************
 **************************************/
describe('#first(array)', function () {

  it('should return the first element of a non-empty array', function () {
    assert.strictEqual(_.first(['first', 'second']), 'first');
    assert.strictEqual(_.first(['monday', 'tuesday']), 'monday');
  });

});

xdescribe('#take(array, n)', function () {

  it('should assign a default value of 1 to n', function () {
    assert.deepStrictEqual(_.take(['first', 'second']), ['first']);
    assert.deepStrictEqual(_.take(['saturday', 'sunday']), ['saturday']);
  });

  it('should return n elements from the beginning of an array', function () {
    assert.deepStrictEqual(_.take(['one', 'two'], 1), ['one']);
    assert.deepStrictEqual(_.take(['mon', 'wed', 'fri'], 2), ['mon', 'wed']);
  });

});

xdescribe('#last(array)', function () {

  it('should return the last element of a non-empty array', function () {
    assert.strictEqual(_.last(['first', 'second']), 'second');
    assert.strictEqual(_.last(['monday', 'tuesday']), 'tuesday');
  });

});

xdescribe('#takeRight(array, n)', function () {

  it('should assign a default value of 1 to n', function () {
    assert.deepStrictEqual(_.takeRight(['first', 'second']), ['second']);
    assert.deepStrictEqual(_.takeRight(['saturday', 'sunday']), ['sunday']);
  });

  it('should return n elements from the end of an array', function () {
    assert.deepStrictEqual(_.takeRight(['one', 'two'], 1), ['two']);
    assert.deepStrictEqual(_.takeRight(['mon', 'wed', 'fri'], 2), ['wed', 'fri']);
  });

});

xdescribe('#compact(array)', function () {

  it('should return a new array without 0.', function () {
    assert.deepStrictEqual(_.compact(['one', 0, 'two']), ['one', 'two']);
  });

  it('should return a new array without undefined.', function () {
    assert.deepStrictEqual(_.compact(['one', undefined, 'two']), ['one', 'two']);
  });

  it('should return a new array without empty string.', function () {
    assert.deepStrictEqual(_.compact(['one', 'two', '']), ['one', 'two']);
  });

  it('should return a new array without null.', function () {
    assert.deepStrictEqual(_.compact(['one', 'two', null]), ['one', 'two']);
  });

  it('should return a new array without NaN.', function () {
    assert.deepStrictEqual(_.compact([NaN, 'one', 'two']), ['one', 'two']);
  });

});

xdescribe('#difference(array1, array2)', function () {

  it('should return a new array with elements in the first but not second argument', function () {
    assert.deepStrictEqual(_.difference([1, 2, 3], [4, 2]), [1, 3]);
  });

});

xdescribe('#min(array)', function () {

  it('should return the element with the minimum value', function () {
    assert.strictEqual(_.min([1, 2, 3, 4, 5]), 1);
    assert.strictEqual(_.min([100, 200, 300, 400]), 100);
  });

});

xdescribe('#max(array)', function () {

  it('should return the element with the maximum value', function () {
    assert.strictEqual(_.max([1, 2, 3, 4, 5]), 5);
    assert.strictEqual(_.max([1, 7, 3, 4, 5, 0]), 7);
  });

});

xdescribe('#indexOf(array, el)', function () {

  it('should return an index of the first element in the array that matches el', function () {
    assert.strictEqual(_.indexOf(["one", "two", "three"], "two"), 1);
    assert.strictEqual(_.indexOf([101, 202, 303], 303), 2);
  });

  it('should return an index of -1 if no elements in the array matches el', function () {
    assert.strictEqual(_.indexOf(["one", "two", "three"], "five"), -1);
    assert.strictEqual(_.indexOf([101, 202, 303], 909), -1);
  });

});

xdescribe('#reduce(collection, callback, accumulator)', function () {

  it('should return the sum of every element in an array', function () {
    const reduced = _.reduce([1, 2, 3, 4, 5], function (accumulator, num) {
      return accumulator += num;
    });

    assert.deepStrictEqual(reduced, 15);
  })

  it('should return the sum of every element in an array plus the starting value of accumulator', function () {
    const reduced = _.reduce([1, 2, 3, 4, 5], function (accumulator, num) {
      return accumulator += num;
    }, 5);

    assert.deepStrictEqual(reduced, 20);
  })

  it('should return the product of every element in an array', function () {
    const reduced = _.reduce([1, 2, 3, 4, 5], function (accumulator, num) {
      return accumulator *= num;
    });

    assert.deepStrictEqual(reduced, 120);
  })

  it('should return the product of every element in an array multiplied by the starting value of the accumulator', function () {
    const reduced = _.reduce([1, 2, 3, 4, 5], function (accumulator, num) {
      return accumulator *= num;
    }, 10);

    assert.deepStrictEqual(reduced, 1200);
  })

});

xdescribe('#every(array, callback)', function () {

  it('should return a boolean', function () {
    const boolTest = _.every([1, 2, 3], function (el) {
      return (el);
    });
    assert.isBoolean(boolTest, true);
  })

  it('should return true if the array is empty', function () {
    const emptyArray = _.every([], function (el) {
      return (el);
    });

    assert.deepStrictEqual(emptyArray, true);
  });

  it('should return true if every element returns true', function () {
    const trueArray = _.every([1, 2, 3, 4, 5], function (num) {
      return (num);
    });

    assert.deepStrictEqual(trueArray, true);
  });

  it('should return false if not every element returns true', function () {
    const falseArray = _.every([1, 2, 3, 4, undefined], function (num) {
      return (num);
    });

    assert.deepStrictEqual(falseArray, false);
  });

});

// /*************** BONUS ***************/
xdescribe('#shuffle(array)', function () {

  it('should return a new array with elements shuffled', function () {
    assert.strictEqual(_.shuffle([1, 2, 3]).length, 3);
  });

});

// /**************************************
// ************* COLLECTIONS *************
// **************************************/
xdescribe('#size(collection)', function () {

  it('should return the size of a string', function () {
    assert.strictEqual(_.size('pizza'), 5);
    assert.strictEqual(_.size('cookie'), 6);
  });

  it('should return the size of an array', function () {
    assert.strictEqual(_.size([1, 2, 3, 4]), 4);
    assert.strictEqual(_.size(['mon', 'wed', 'fri']), 3);
  });

  it('should return the size of an object', function () {
    assert.strictEqual(_.size({ a: 1, b: 2, c: 100 }), 3);
    assert.strictEqual(_.size({ a: 'one', b: 'two', c: 'three' }), 3);
  });

});

xdescribe('#forEach(collection, callback)', function () {

  it('should iterate on each character of a string', function () {
    var iterated = '';

    _.forEach('pizza', function (val, i, string) {
      iterated += val;
    });

    assert.deepStrictEqual(iterated, 'pizza');
  });

  it('should iterate on each element of an array', function () {
    var iterated = [];

    _.forEach([1, 2, 3, 4], function (val, i, array) {
      iterated.push(val);
    });

    assert.deepStrictEqual(iterated, [1, 2, 3, 4]);
  });

  it('should iterate on each element of an object', function () {
    var iterated = [];

    _.forEach({ a: 1, b: 2, c: 3 }, function (val, key, obj) {
      iterated.push(val);
    });

    assert.deepStrictEqual(iterated, [1, 2, 3]);
  });

});

xdescribe('#map(collection, callback)', function () {

  it('should iterate on each character of a string', function () {
    var mapped = _.map('pizza', function (val, i, string) {
      return val;
    });

    assert.deepStrictEqual(mapped, ['p', 'i', 'z', 'z', 'a']);
  });

  it('should iterate on each element of an array', function () {
    var mapped = _.map([1, 2, 3, 4], function (val, i, array) {
      return val * val;
    });

    assert.deepStrictEqual(mapped, [1, 4, 9, 16]);
  });

  it('should iterate on each element of an object', function () {
    var mapped = _.map({ a: 1, b: 2, c: 3 }, function (val, key, obj) {
      return val * val;
    });

    assert.deepStrictEqual(mapped, [1, 4, 9]);
  });

});

xdescribe('#filter(collection, callback)', function () {

  it('should iterate on each character of a string', function () {
    var filteredArray = _.filter('pizza', function (val, i, array) {
      return val === 'z';
    });

    assert.deepStrictEqual(filteredArray, ['z', 'z']);
  });

  it('should iterate on each element of an array', function () {
    var filteredArray = _.filter([1, 2, 3, 4], function (val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepStrictEqual(filteredArray, [2, 4]);
  });

  it('should iterate on each element of an object', function () {
    var filteredArray = _.filter({ a: 1, b: 2, c: 3 }, function (val, key, obj) {
      return (val % 2) === 1;
    });

    assert.deepStrictEqual(filteredArray, [1, 3]);
  });

});

xdescribe('#reject(collection, callback)', function () {

  it('should iterate on each character of a string', function () {
    var rejectedCollection = _.reject('pizza', function (val, i, array) {
      return val === 'z';
    });

    assert.deepStrictEqual(rejectedCollection, ['p', 'i', 'a']);
  });

  it('should iterate on each element of an array', function () {
    var rejectedCollection = _.reject([1, 2, 3, 4], function (val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepStrictEqual(rejectedCollection, [1, 3]);
  });


  it('should iterate on each element of an object', function () {
    var rejectedCollection = _.reject({ a: 1, b: 2, c: 3 }, function (val, key, obj) {
      return (val % 2) === 1;
    });

    assert.deepStrictEqual(rejectedCollection, [2]);
  });

});

// /*************** BONUS ***************/
xdescribe('#objectToArray(object)', function () {

  it('should return an array', function () {
    const convertedObject = _.objectToArray({ a: 1, b: 2, c: 3 });

    assert.isArray(convertedObject, true);
  });

  it('should convert an object to an array of arrays', function () {
    const convertedObject = _.objectToArray({ a: 1, b: 2, c: 3 });

    assert.deepEqual(convertedObject, [['a', 1], ['b', 2], ['c', 3]]);
  });

});

xdescribe('#sample(collection, n)', function () {

  it('should return n random characters of a string', function () {
    var randomizedCollection = _.sample('pizza', 2);

    assert.deepStrictEqual(randomizedCollection.length, 2);
  });

  it('should return n random elements of an array', function () {
    var randomizedCollection = _.sample([1, 2, 3, 4], 3);

    assert.deepStrictEqual(randomizedCollection.length, 3);
  });


  it('should return n random elements of an object', function () {
    var randomizedCollection = _.sample({ a: 1, b: 2, c: 3 }, 2);

    assert.deepStrictEqual(randomizedCollection.length, 2);
  });

});


