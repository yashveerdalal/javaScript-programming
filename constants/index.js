// const = a variable that cant be changed 

const PI = 3.14159; // putting const instead of let will declare the varaible as the constant that cant be further changed in the prog.

let radius ;
let circumference;







document.getElementById("mysubmit").onclick = function (){
     radius = document.getElementById("mytext").value;
     radius = Number(radius);
     circumference = 2 * PI * radius;
     document.getElementById("myh3").textContent = `The circumference of the given  circle is ${circumference} cm` ;

}