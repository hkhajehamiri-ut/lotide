let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }

    } return true;

  }
}

const assertArrayEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`Arrays are equal: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`Arrays are not equal: ${arrOne} !== ${arrTwo}`);
  }
} 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function(arr, callback) {
  let outPut = [];
  //arr.map(callback);
  for(item of arr) {
    if(!callback(item)) {
      outPut.push(item);
    } 
    else {
      return outPut;
    }
  }
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEqual(results1, [1, 2, 5, 7, 2]);
assertArrayEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);