// how to create objects in js

const student = {
  fullName : "Sarah",
  marks : 89.8,
  printMarks: function () {
    console.log('marks = ',this.marks); 
  }
}

// when we create object in js then a special object called prototype is created inside it
// student.toString  create function which comes from prototype obj

// prototype contain methods and prop. when we create an object, it inherit properties from prototype


let arr = ['sarah','ali','usman']


// define function inside object
const employee = {
  calcTax() {
    console.log('Tax rate is 10%');
  }
  
  // second way
  // callTax : function() {
  //   console.log('Tax rate is 10%');
  // }
}

// when an object and prototype have same function then object function has greater priority than prototype methods
const sarah = {
  salary:230000,
  calcTax : function () {
    console.log('Tax rate is 50%');
  }
}

const ali = {
  salary:120000
}

sarah.__proto__=employee
ali.__proto__=employee