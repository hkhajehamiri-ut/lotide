const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 6 for [6,3,5]", () => {
    assert.strictEqual(head([6,3,5]), 6); 
  });

  it("returns 'Hello' for ['Hello','Lighthouse','Labs']", () => {
    assert.strictEqual(head(['Hello','Lighthouse','Labs']), 'Hello'); 
  });

  it("returns 20 for [15,20,31]", () => {
    assert.notStrictEqual(head([15,20,31]), 20); 
  });

  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

});



