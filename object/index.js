// object is a  collection of related properties and/or methods can represent real eorld objects ( people , product , places )

// { key : value < function()}

const  person1 = {
    firstname : "yash",
    lastname : " dalal ",
    age : 19,
    isemployed : false,
    sayhello : function(){console.log(" hi i am yashveer dalal")},
    saybye : function(){console.log("goodbye")}


};

console.log(person1.firstname);
console.log(person1.sayhello);

const person2 = {
    firstname : "snajana",
    lastname : " rana ",
    age : 19,
    isemployed : true,
    sayhello : function(){console.log(" hi i am sanjana rana")},
    saybye : function(){console.log("bye")},
    eat : () => console.log(" i am eating chicken ")
    
    
    

}
console.log(person2.firstname);
console.log(person2.isemployed);
person2.saybye();
person2.eat();