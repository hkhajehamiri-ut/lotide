const assert = require('chai').assert;
const tail = require('../tail');

describe("#middle", () => {

  it("returns [7, 3] for [5, 7, 3]", () => {
    assert.deepEqual(tail([5, 7, 3]), [7, 3]); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []); 
  });

  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]); 
  });
  
  it("returns [2, 4, 9, 5] for [1, 2, 4, 9, 5]", () => {
    assert.deepEqual(tail([1, 2, 4, 9, 5]), [2, 4, 9, 5]); 
  });

  it("returns [9, 5, 4] for [1, 9, 5, 4]", () => {
    assert.deepEqual(tail([1, 9, 5, 4]), [9, 5, 4]); 
  });

  it("returns [5, 6, 7, 8, 9] for [4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(tail([4, 5, 6, 7, 8, 9]), [5, 6, 7, 8, 9]); 
  });

  it("returns ['b', 'c', 'd', 'x'] for ['a', 'b', 'c', 'd', 'x']", () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd', 'x']), ['b', 'c', 'd', 'x']); 
  });

  it("returns ['b', 'c', 'd'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']); 
  });

});


