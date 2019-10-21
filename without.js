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

const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) { //looping through the source array
    for (let j = 0; j < itemsToRemove.length; j++) { //looping through the items to check to compare them with each item of the array
      if(source[i] === itemsToRemove[j]){   //removing the item from the original array if it exists in the items to remove
        source.splice(i, 1);
      }       
    }
  }
    return source;
}

const words = ["hello", "world", "lighthouse"];
console.log(assertArrayEqual(without(words, ["lighthouse"]), ["hello", "world"]));

const sourceNums = ["1", "2", "3"];
assertArrayEqual(without(sourceNums, ["1"]), ["1", "2"]);
