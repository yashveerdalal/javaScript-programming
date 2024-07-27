// declare code once and use it multiple times 

function happybirthday(username , age ){ //parameters 

    console.log("happy");
    console.log("birthday");
    console.log("to");
    console.log(`${username}`);
    console.log(`for `);
    console.log(`${age}th time `);




}

happybirthday("yash" , 19); //arguments 

function add( x ,y){
    let result = x + y;
    return result;
}
function multi( x,y){
    let result = x * y;
    return result;
}

let value = add( 5,5);
console.log(value);

let ans = multi( 5, 5);
console.log(ans);