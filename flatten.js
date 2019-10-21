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


const flatten = function (array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      } 
    }
      else {
        flattenedArray.push(array[i]);
      }
    }
  
  return flattenedArray;
};

assertArrayEqual(flatten(["hilda", "iman", ["mina", "jahan"], ["armin"]]), ["hilda", "iman", "mina", "jahan", "armin"]);

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);



//Ask why recursion won't work here

// const flatten = function(array) {
//   let flattenedArray = [];
//   for(item of array) {
//     if (Array.isArray(array[item])) {
//       flatten(array[item]);
//     } else {
//       flattenedArray.push(item);
//     }
//   }
//   return flattenedArray;
// }

// flatten([1, 2, [3, 4], 5, [6]]);