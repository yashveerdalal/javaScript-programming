// constructors = special method for defining the properties and method of objects 

const car1 = { 
    make : "Ford" ,
    model : "Mustang", 
    year : 2024 ,
    color : "red"  ,
    drive : function(){ console.log(` your drive is ${this.model}`)}
}
const car2= { 
    make : "dodge" ,
    model : "charger", 
    year : 2025 ,
    color : "blue"  ,
    drive : function(){ console.log(` your drive is ${this.model}`)}
}
const car3 = { 
    make : "tata" ,
    model : "nano", 
    year : 2024 ,
    color : "white"  ,
    drive : function(){ console.log(` your drive is ${this.model}`)}
}


// instead of doing all this shit again and again we can use constructors 

function Car(make, model, year , color ){ // this all is known as constructors 
    this.make = make ,
    this.model = model ,
    this.year = year ,
    this.color = color 
}

const Car1 = new Car("honda","amaze",2016,"white");

console.log(Car1.model);
