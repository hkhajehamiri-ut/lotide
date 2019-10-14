let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣Assertion failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Iman", "Hilda");
assertEqual("Hilda", "Hilda");
assertEqual(5, 8);