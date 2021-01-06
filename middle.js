const middle = function (array) {
  let midElement = [];
  
  if (array.length < 3) {
  return midElement; // instead array.length <= 2
  } else if (array.length % 2 === 0) {
    midElement.push(array[array.length / 2 - 1]);
    midElement.push(array[array.length / 2]);

  } else if (array.length % 2 === 1) {
     // the second if can be an else if as it is impossible for both conditions to be true 
    midElement.push(array[(array.length - 1) / 2]);
  }
  
  return midElement;
}



module.exports = middle;


