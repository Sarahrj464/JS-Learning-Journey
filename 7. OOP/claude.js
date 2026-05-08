// 1. objects and properties
const person = {
  name:'Ali',
  gpa:3.4,
  greet() {
    console.log(`Hey I am ${this.name}`);
  }
}
person.greet()



// 2. Classes
class Animal {
  constructor(name,sound) {
    this.name=name
    this.sound=sound
  }
  speak(){
    console.log(`${this.name} says ${this.sound}`);
  }
}
const dog=new Animal('Dog','Woof')
dog.speak()
const cat=new Animal('Cat','Meow')
cat.speak()


// 4 pillars of oop
// 1. encapsulation -- hiding internal details
class Bank {
  #balance=0  //private
  deposit(amount){
    this.#balance+=amount
  }
  getbalance(){
    return this.#balance
  }
}
const acc=new Bank()
acc.deposit(1000)
console.log(acc.getbalance());
// console.log(acc.#balance); //error



// 2. inheritence -- child class extend parent class
class Animals {
  constructor(name) {
    this.name=name
  }
  eat(){
    console.log(`${this.name} is eating`);
  }
}
class Dog extends Animals {
  bark() {
    super.eat()
    console.log(`${this.name} says Woof!`);
  }
}
const d=new Dog('Brounie')
// d.eat()
d.bark()


// 3. polymorphism
// same method name but differ behaviors
class Shape {
  area(){
    return 0
  }
}
class Circle extends Shape {
  constructor(c) {
    super()
    this.c=c
  }
  area() {
    return Math.PI * this.c**2
  }
}
class Square extends Shape {
  constructor(s) {
    super()
    this.s=s
  }
  area() {
    return this.s**2
  }
}
const sh=[new Circle(4),new Square(2)]
sh.forEach(s => {
  console.log(s.area())
});


// 4. abstraction
// expose only what is necessary
class Coffee {
  #heatWater() {
    console.log('heating...');
  }
  #grindBeans() {
    console.log('grinding...');
  }
  makeCoffee() {
    this.#heatWater()
    this.#grindBeans()
    console.log('coffee is ready');
  }
}
let c= new Coffee().makeCoffee()
// c.makeCoffee()



// this keyword -- refer to current obj context
class Timer {
  constructor() {
    this.seconds=0
  }
  start(){
    setInterval(() => {
    this.seconds++
    console.log(this.seconds);
  }, 1000);
  }
}
// const t=new Timer().start()


// prototype
function Persons(name) {
  this.name=name
}
// secret link
Persons.prototype.greet = function() {
  console.log(`Hey I am ${this.name}`); 
}
const p=new Persons("Sarah")
p.greet()


// static methods and props
class Mathop {
  static PI=3.14
  static square(n){
    return n*n
  }
}
// const m = new Mathop().square(7)
console.log(Mathop.PI);
console.log(Mathop.square(2));



// getter and setter 
class Temp {
  constructor(celcius) {
    this._c=celcius
  }
  get farenheit() {
    return this._c*9/5+32
  }
  set farenheit(f) {
    this._c=(f-32)*5/9
  }
}
const t=new Temp(0)
console.log(t.farenheit);
t.farenheit=212
console.log(t._c);

