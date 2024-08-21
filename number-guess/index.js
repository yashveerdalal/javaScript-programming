const min = 1;
const max = 100;
const random = Math.floor(Math.random()* max - min + 1 )+ 1;
console.log(random);
let guess ;
for(let i = 1 ; guess != random ; i++){
    window.prompt("enter the number ");
}