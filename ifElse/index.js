const mytext  = document.getElementById("mytext");
const submit = document.getElementById("mysubmit");
const result = document.getElementById("result");

let age;


submit.onclick = function (){

    age = mytext.value;
    //text from a text box is a string data type so we need to type cast it to the number data type
    age = Number(age);

    if ( age >= 18) {

        result.textContent =("heya!");
        
    }
    
    else if (age <12){
        result.textContent = ("what are you doing here man ???");
    }
    
    else{
    
        result.textContent =("bye");
    
    
    } 


}