// functions -- piece of code to perform specific task
// function definition  --- variable in it is parameters
// function call --- pass arguments

// functions parameters --- local variables and have block scoped

function show() {
  console.log("Hello sarah");
}
show();

// paramters
function myFunction(msg) {
  console.log(msg);
}
myFunction("I love JS");

// function to sum 2 numbers
function sum(x, y) {
  // local variables
  s = x + y;
  return s;
  // console.log('after run');  -- never execute/print
}
r = sum(3, 4);
console.log(r);

// Arrow functions -- modern JS
// const funcname=(para1,para2..) => {}

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(5, 9);



const arrowMul = (x, y) => {
  return x * y;
};
// m=arrowMul(2,5)
// console.log(m);




const hello = () => {
  console.log("hello sarah");
};

// QS 1
function myStr(string) {
  let count = 0;
  for (let el of string) {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
      count++;
    }
  }
  console.log(count);
}
myStr("hello");



// arrow
const countVowels = (str) => {
  let c=0
  for (let ch of str) {
    if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') {
      c++
    }
  }
  return c
}




// for-each loop in arrays -- methods
// function
// method -- forEach

// arr.ForEach(callBack)

// function pass in js as parameters
// callback --> function that pass as an argument to another function



let arr=[1,2,3,4,5]
// foreach -- array ke aik aik value/element ku pick kre ga and internal callback function ku pass kre ga
// here n receive value from foreach
// foreach automatically execute
arr.forEach(function show(n) {  // value at each index pass to n
  console.log(n);
})



mystring=["sarah","ali","usman"]
// mystring.forEach(function show(str) {
//   console.log(str);
// })



// 2nd method == callback function in forEach is passed as ARROW function
mystring.forEach((str,idx,mystring)=>{
  console.log(str);
  
  // console.log(str.toUpperCase(),idx,mystring);
})


// callback contain 3 parameters
// value
// index
// array



// WHAT ARE HIGHER ORDER FUNCTIONS/METHODS
// forEach is HOF/HOM ---> ju dusry function ku as parameter lety ya dusry function ku as value return krty
// let array=[1,2,3,4,5]
// array.forEach((val)=>{
//   new_array=val*val
//   console.log(new_array);
// })


// 2nd method
let array1=[10,20,30,40,50]
let square=(val)=>{
  new_array1=val*val
  console.log(new_array1);
}
array1.forEach(square)




