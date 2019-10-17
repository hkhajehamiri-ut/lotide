let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣Assertion failed: ${actual} !== ${expected}`);
  }
};
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Iman", "Hilda");
assertEqual("Hilda", "Hilda");
assertEqual(5, 8);
*/

const findKeyByValue = function(objectToCheck, valueToCheck) {
  for(var keyCheck in objectToCheck) {
    if(objectToCheck[keyCheck] == valueToCheck) {
    return keyCheck;
    
      //  return key;
    } 
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

