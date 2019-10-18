let assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (var key in object) {
    if (callback(object[key])) {
      return key;
    } 
  }
}

const favFilms = {
  "PS. I love you": { awards : 3},
  "Dr. Strange":  { awards : 4},
  "The Pianist":  { awards : 3}
};

// findKey(
 let sample =  {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
} // x => x.stars === 2) // => "noma"

assertEqual(findKey(sample, x => x.stars === 2), "noma");
assertEqual(findKey(favFilms, x => x.awards === 4), "Dr. Strange");
