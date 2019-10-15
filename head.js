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

  let head = function(array, expected) {
      return array[0];
  }
  assertEqual(head([6,3,5]), 6);
  assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
  assertEqual(head([15,20,31]), 20);
  assertEqual(head([1]), 1);
  assertEqual(head([]), 1);