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

const middle = function (array) {
  let midElement = [];

  if (array.length === 1 && array.length === 2) return midElement; // instead array.length <= 2

  if (array.length % 2 === 0) {
    midElement.push(array[array.length / 2 - 1]);
    midElement.push(array[array.length / 2]);
  } 
  // the second if can be an else if as it is impossible for both conditions to be true 

  if (array.length % 2 === 1) {
    midElement.push(array[(array.length - 1) / 2]);
  }

  return midElement;
}
console.log(middle([1]));
console.log(middle([1, 3, 4, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));
