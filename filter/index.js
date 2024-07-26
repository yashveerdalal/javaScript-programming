// .filter ( ) = creates a new array by filtering out elements on the basis of specific requirements given by the user 

let numbers = [1,2,3,4,5,6,7];

let even  =  numbers.filter(iseven);

function iseven(element){
  if( element %2 ===0 ){
    return element;
  }

}

console.log(even);