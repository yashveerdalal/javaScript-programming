// arrow function = a concise way to write function expression good for simple function that you use only once (parameter) = > some code 


function hello(){
    console.log("hello");
}
hello();

const hi = () => console.log("hello");

hi();

const sum = (a,b) =>  console.log( a + b);

const div = (a,b) =>  console.log(a/b);

sum(10,15);

const array = [1,2,3,4,5,6,7,8];

const squares = array.map((element) => Math.pow(element,2) )
 console.log(squares);