let args = process.argv.slice(2);
let reverse = function(argu) {
  let result = "";
  for(let i = 0; i < argu.length; i++) {
    for(let j = argu[i].length-1; j >= 0; j--){
      result += argu[i].charAt(j);
   }   
   result += "\n";
  } 
  return result;
  
}
console.log(reverse(args));
