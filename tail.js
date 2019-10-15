let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣Assertion failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  let tailedArray = [];
  for (let i = 1; i < array.length; i++) {
    tailedArray.push(array[i]);
  }
  return tailedArray;
};
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

let emptyArray = [];
tail(emptyArray);
assertEqual(emptyArray.length, 0);


