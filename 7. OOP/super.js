class Person {
  constructor(name) {
    // console.log('enter parent constructor');
    this.species = "homo sapiens"
    this.name=name
  }
  eat() {
    console.log('eat');
  }
  sleep() {
    console.log('sleep');
  }
  // method overriding -- when parent and child have same method then child has greater priority
   work() {
    console.log('do nothing');
  }
}

class Engineer extends Person {
  constructor(name) {
    // console.log('enter child constructor');
    super(name)  // invoke to parent class constructor
    // super keyword is used in inheritence
    // if we want to acces parent methods in child then we use super keyword

    // this.brand=brand
    // console.log('exit child constructor');
  }

  work() {
    super.eat()
    // eat()  gives error
    console.log('solve problem');
  }
}

let myobj=new Engineer('Sarah engg')