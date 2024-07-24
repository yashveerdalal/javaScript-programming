// callback - a function that is passed as an argument to the other function 

//   helps with -  reading a file 
//  network request 
// interacting with database 
// " hey , when you are done ,  call this nexxt "

function hello(){
    setTimeout(function ()  {
        console.log("hello");   
    }, 3000);
    
}
function bye(){
    console.log("bye");
}
  hello();
  bye();

  // so in the above fun the bye fun is executed firstly but we dont want that so the solution to this prob is callback

  function yes(callback){
    console.log("yes");
    callback()
  }
  function no(){
    console.log("no");
  }
  

  yes(no);
 
  function sum( callback , x , y ){
    let result =  x + y ;
    callback(result);
  }
  function display(result){
    console.log(result);
  }

  sum(display , 5 , 5 );