// class is a es6 feature that provide more structured and cleaner way to work with objects compared to traditional constructors functions 
// ex static keywords , encapsulation , inheritance 


function product(name , price){
    this.name = name;
    this.price = price;
    this.display = function(){
        console.log(`product : ${name}`);
        console.log(`price : $${this.price}`);

    };
    this.calculate = function(salextax){
        return  this.price + ( this.price * salextax);
    }

}

const tax = 0.05;

const product1 = new product("shirt" , 19.99);
const product2 = new product("pants" , 10.9);
const product3 = new product("underwear" , 5.5);

product1.display();
product2.display();
console.log(product3.calculate(tax))


//another way to do this is by using the class method

class Car{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
   display()  {
        console.log(`product :${this.name} `); // in class there is no need to use the keyword " function "
        console.log(`price : $${this.price}`);
    }
}

const car1 = new Car( "amaze " , 10000);
car1.display();