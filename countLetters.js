let assertEqual = function(actual, expected) {
  let areEqual = true;
  let diffKeys = {};
  const allKeys = [...Object.keys(actual), ...Object.keys(expected)]
  allKeys.forEach(key => {
    if(actual[key] !== expected[key]){
      areEqual = false;
      diffKeys[key] = [actual[key], expected[key]];

      // console.log("Sorry the objects are not equavalent");
    }   

  });
  
  if(areEqual) {
    console.log("Yay! The objects are equivalent");
    
  } else {
    console.log("Sorry the objects are not bcz of the following differences in the following keys");
    console.log(diffKeys);
  }

  // if (???) return true;
  // else return false;
// }
};
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Iman", "Hilda");
assertEqual("Hilda", "Hilda");
assertEqual(5, 8);
*/

const countLetters = function (words) {
  let results = {};
  for(const eachlet of words) {
    if(results[eachlet]) {
      results[eachlet] += 1;
    } else {
      results[eachlet] = 1;
    }
  }
  return (results);
}

countLetters("hilda");
countLetters("Karima");

assertEqual(countLetters('hilda'), {h: 1, m: 1, l: 1, d: 1, a: 1});
assertEqual(countLetters('Karima'), {K: 1, a: 2, r: 1, i: 1, m: 1});
//assertEqual(result1["Fang"], 2);
