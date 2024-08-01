// . map( ) accepts a callback and applies that function to each element of an array then return a new array 

const numbers = [ 1,2,3,4,5];

const new_array = numbers.map(square);




function square(element){
   return  element = Math.pow(element,2);
}

console.log(new_array);
 

// diff btw this and callback is that callback edits the original array whereas this one creates an entirely new array 