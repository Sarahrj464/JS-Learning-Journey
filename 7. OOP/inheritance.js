// inheritance
// passing down prop. from parent to child class

class Parent {
  hello() {
    console.log('hello'); 
  }
}
class Child extends Parent {}
let obj = new Child()






class Person {
  constructor() {
    this.species = "homo sapiens"
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
  work() {
    console.log('solve problem');
  }
}

let myobj=new Engineer()