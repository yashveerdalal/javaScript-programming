// inheritance = allows a new class to inherit properties and methods from an existing class ( parent -> child )
//  helps with code reusability 

class Animal {
    alive  = true ; 
  eat(){
    console.log(`this ${this.name} is eating`);
  }
  sleep(){
    console.log(`this ${this.name} is sleeping`);
  }

}

class Rabbit extends Animal{
    name = "rabbit";
}
class Fish extends Animal{
    name = "fish";
}
const rabbit = new Rabbit();
const fish = new Fish();

console.log(Rabbit.alive);
rabbit.eat();


// extra quality can be added to each on the one individually 
