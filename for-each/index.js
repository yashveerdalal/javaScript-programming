// for each - method used to iterate over the elements  of an array and apply a specific function ( callback ) to each element 

/// array.foreach(callback)

let numbers = [1 ,2 ,3,  4, 5, 6 , 7 ];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index , array ){
array[index]= element*2 ;

}
function display(element){
    console.log(element);
}

console.log(numbers);