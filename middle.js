
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


module.exports = middle;


