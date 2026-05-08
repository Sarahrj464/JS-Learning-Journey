// // loops --> execute piece of code again and again
// for (let i=1; i<=5; i++) {
//   console.log('apna college');
// }

// for (let i=1; i<=10; i++) {
//   console.log("i =",i);
// }
// // console.log(i); // block scoped



// console.log('even numbers');
// for (let i=1; i<=100; i++) {
//   if (i%2==0) {
//     console.log(i);
//   }
// }


// let sum=0
// for (let i=1; i<=10; i++) {
//   sum=sum+i
// }
// console.log(sum);  //55



// // while
// let i=1
// while (i<=5) {
//   console.log(i);
//   i++;
// }


// // do-while --> run at least 1 time
// let j=20;
// do {
//   console.log("SARAH");
//   j++;
// }
// while(j<=10);



// // for-of loop  --> used on strings and arrays
// // no write initialization,cond,inc
// let mystr="BSCS"
// let s=0
// for (let i in mystr) {
//   console.log(i,mystr); 
//   s++;
// }
// console.log(s);


// // for-in loop --> contain object keys
// let student = {
//   name:"Sarah",
//   age:22,
//   cgpa:4.0
// }
// for (let key in student) {
//   console.log("key=",key,"value=",student[key]);
// }


let gameNum=25
let num=prompt("Enter number: ")
while (gameNum!=num) {
  num=prompt("Enter number: ")
}
console.log('Congrats, you entered correct num');
