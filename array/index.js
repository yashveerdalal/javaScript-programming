// array = a varaible like structure that can hold more thn 1 value 

let fruits = [ ` apple `, ` banana`,`guava`,`papaya`];

console.log(fruits);
console.log(fruits[0]);
fruits[0] = ` orange `; // it replaced the apple  in the array 
fruits.push(`coconut `); // it will add the cocunut at the last index 
fruits.pop(); // it will delete the element with the last index 
console.log(fruits);


// .unshift will add the elemet in the front or the 0th index 
// .shift will remove the elemnet from the front 
// .lenght is for the length of array 
// .indexOf is for index of specific element 
// if indexOf property returns -1 that means the absence of specific value in the array 

console.log(fruits.indexOf("grapes"));

//. sort will sort and .reverse will rev 