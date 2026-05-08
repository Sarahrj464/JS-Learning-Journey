name="Sarah R."
age=22
a=null 
b=undefined
isFollow=false
console.log(name,age);
console.log(isFollow);

// js is dynamically-typed programming language --> means at run-time, it decide which type of value stored in it
age=24
console.log(age);

Console="reserved words"
console.log(Console);


// var --> global scope variable, can be redeclared + update

// let and const introduced ES6 in 2015
// let --> block scope variable, cannot be redeclared but update
// const --> block scope variable, cannot be redeclared nor updated


// data types -- 7 types
// 1. primitive --> numbers, string, boolean, undefined, null, bigint, symbol
// 2. non-primitive --> objects (arrays,functions)

// numbers
let myage=20
// number
let price=2.5
// string
let name1="Sarah"
// boolean
let x=true
// undefined
let y=undefined
// null
let z=null



// objects
// constant object cannot change --> name="ALi" wrong
// but constant object keys can change --> student.name="ALi"  correct

// let is changeable
// const is not changeable
// const obj key is changeable
const student = {
  name:"Sarah",
  age:22,
  cgpa:4.0
};
// obj.key / obj[key]
console.log(student.age);
console.log(student['age']);

// student['cgpa']=3.0
// console.log(student['cgpa']);
student.cgpa=3.0
console.log(student.cgpa);

