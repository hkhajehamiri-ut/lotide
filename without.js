const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArrayEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`Arrays are equal: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`Arrays are not equal: ${arrOne} !== ${arrTwo}`);
  }
};

const without = function (source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
};

const words = ["hello", "world", "lighthouse"];
console.log(
  assertArrayEqual(without(words, ["lighthouse"]), ["hello", "world"])
);

const sourceNums = ["1", "2", "3"];
assertArrayEqual(without(sourceNums, ["1"]), ["1", "2"]);
