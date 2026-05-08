// callback function pass as argument inside foreach loop
let num=[10,20,30,40,50,60]
let mysum=0

// 1st method
// num.forEach(function sumNum(n) {
//   mysum+=n
// })
// console.log(mysum);



// 2nd method
// num.forEach((n)=>{
//   mysum+=n
// })
// console.log(mysum);


// 3rd method
let numberSum = (n) => {
  mysum+=n
}
num.forEach(numberSum)
console.log(mysum);



// map 
// create new array with result
// value return by callback is used to form new array

let nums=[1,2,3]
nums.map((n)=>{
  console.log(n);
})

// return value
let newArray=nums.map((n)=>{
  return n*2
})
console.log(newArray);



// filter -- also create new array
let arr=[1,2,3,4,5]
let newArr=arr.filter((num)=>{
  return (num%2==0)
})
console.log(newArr);


// reduce -- return single value
// contain previous val + current val
let a=[1,2,3,4,5]
// res = 1
// curr = 2  
// 1+2=3

// res=3
// curr=3
// 3+3=6

// res=6
// curr=4
// 6+4=10

let output=a.reduce((res,curr)=>{
  return res+curr
})
console.log(output);


// print larger number
let output1=a.reduce((prev,curr)=>{
  return prev>curr? prev:curr
})
console.log(output1);