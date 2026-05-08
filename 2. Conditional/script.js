// operators --  used to perform operations on data
// operator and operand 

// operator operation perform krta hy
// operation ks pr perform huta? operand pr

// arithematic operators
// +,-,*,/

let a=5
let b=2
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);  //2.5
console.log(a%b);  //1
// exponentiation
console.log(a**b);  //5^2=25

// unary operators --> increment / decrement
// post ---> pehly print krta, bad mn value change krta
// pre --> pehly value change krta, bad mn print krta
a=a+1  //5+1=6
console.log(a);  //6

a++  //7
console.log(a);

a=a-1 //7-1=6
console.log(a);


// post and pre
x=10
// post 
console.log(x++);  //10
console.log(x);  //11

// pre
console.log(++x);  ///12
console.log(x);  //12






// assignment operators 
// =, +=, -=, *=, %=, **=
let x1=10
let x2=20
x1+=5
x2-=10
console.log(x1)
console.log(x2)


// comparison operators  -> return boolean
let a1=3
let b1=2
console.log(a1==b1);  //f
console.log(a1>b1);  //t
console.log(a1!=b1);  //t

let c=8
let d="8" // string->number (implicit)
console.log(c==d);  //t

// stricter version to check
console.log(c===d);  //f



// logical operators
let q=5
let r=2
let cond1=q<r
let cond2= q==5
// console.log(cond1&&cond2);  //t
console.log(cond1 && cond2);  //f

console.log(cond1 || cond2);  //t

console.log(!(q>r)); //f



// conditional statements
// if
let age=22
if (age>18) {
  console.log('you can vote');
}


let mode="dark"
let color
if (mode=='dark') {
  color="black"
}
else {
  color="white"
}
console.log(color);



let n=10
if (n%2==0) {
  console.log('even');
}
else {
  console.log('odd');
}


// if else-if 
let marks=85
if (marks>90) {
  console.log('A');
}
else if (marks>80 && marks<90) {
  console.log('B');
}
else {
  console.log('C');
}


// ternary oerators a?b:c -- compact if-else
let age1=20
myage = age1>=18 ? "vote":"not vote"
console.log(myage);
