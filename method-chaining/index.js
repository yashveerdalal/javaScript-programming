// defination of method chaining - calling one method after another in one continuous line of code 


let username =  "yAshveEr  ";

// no method chaining 

username  = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachar = username.slice(1);
extrachar = extrachar.toLowerCase();
username = letter + extrachar;
console.log(username);

// method chaining 

let user = "yAsHveer ";
user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase();
console.log(user);
