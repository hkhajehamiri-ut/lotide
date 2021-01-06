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
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

const assertArrayEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`Arrays are equal: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`Arrays are not equal: ${arrOne} !== ${arrTwo}`);
  }
} 

const letterPositions = function(sentence) {
  const results = {};
  let letter = '';
  for (let i = 0; i < sentence.length; i++) {
    letter = sentence.charAt(i);
    if(letter === " ") {
      continue;
    }
    if(!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
      
   }
  }
  console.log(results);
  return results;
}


assertArrayEqual(letterPositions("hilda hello"), {h: [0, 6]});
// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);