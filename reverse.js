let args = process.argv.slice(2);
let reverse = function(argu) {
  let result = "";
  for(let i = 0; i < argu.length; i++) {  //looping through the arguments
    for(let j = argu[i].length-1; j >= 0; j--){  //looping through the letters of each argument
      result += argu[i][j];     //adding the letters in reverse to the result string
   }   
   result += "\n";      // starting the reversed argument on a new line
  } 
  return result;
  
}
console.log(reverse(args));
