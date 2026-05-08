let marks = [56, 78, 93, 34, 90, 96];
let newArray = marks.filter((n) => {
  return n > 90;
});
console.log(newArray);



// 2nd qs
// n = Number(prompt("Enter number: "));
// let newArr = []
// for (let i = 1; i <= n; i++) {
//   newArr[i-1]=i
// }
// console.log(newArr);


// // sum
// let myArr = newArr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(myArr);

// // product
// let myArr1 = newArr.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(myArr1);


num=Number(prompt("Enter number: "))
let array=[]
for (let i=1; i<=num; i++) {
  array[i-1]=i
}
console.log(array);

let show = array.reduce((p,c)=>{
  return p<c? p : c
})
console.log(show);

