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

const eqObjects = function (object1, object2) {

  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  let equalArrays = true;
  if (objOneKeys.length !== objTwoKeys.length) {
    equalArrays = false;
  }
  else {

    for (const key in object1) {

      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key])) {
          equalArrays = eqArrays(object1[key], object2[key]);
        } else {
          equalArrays = false;
        }
      } else {
        equalArrays = true;
      }

      //  console.log(equalArrays);
    }
    return equalArrays;
  }
}

const assertObjectEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✔️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💣Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2); // => false

