//function declaration - define a reusable bloack of code that performs a specific task 
// function expressions - a way to define function as values or variables 

function hello (callback){
    console.log( " hello " );
      callback() // this is basically function declaration 
}
const bye = function(){
    console.log( "good bye"); // this is function expression 
}

hello(bye);


setTimeout(bye , 3000);



//--------------------------------------------------------------------------------------------------------------------------//

const array = [ 1 ,2 ,3 ,4,5,6,7,];

const new_array = array.map(function(element){

    return Math.pow(element,2);

}); 
console.log(new_array);

const even = array.filter(function (element){
    return element %2 === 0 ;
})
console.log(even);
  
//no need of function name which helps us to save the storage 


 

