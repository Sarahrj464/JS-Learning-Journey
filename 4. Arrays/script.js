// arrays -- collection of items of same datatype -- linear
// used to store information of same type
// array contain single name
// here index matters
// array contain only keys


// object is also collection of item but contain key value pair and contain differ datatype values



// ex: let we want to store marks of 5 students
// array aik ase object hy js mn key ke jgah hm index use krty and sath value aty
let marks = [23,45,67,88,90]
// arrays are changeable (mutable)
marks[2]=100

console.log(marks);
console.log(typeof marks);  //object
console.log(marks.length);


// index of array -- value store in linear passion
console.log(marks[0]);
console.log(marks[2]);  //100
console.log(marks[9]);  //undefined


// loop array  -- used in strings, arrays, objects
// must know length of array
let name=['sarah','ali','umar','ahmed']
console.log(name.length);

for (let idx=0; idx<name.length; idx++) {
  console.log(name[idx]);
}


// for-of loop 
for (let el of name) {
  console.log(el.toUpperCase());
}


// practice qs
let m = [85,97,44,37,76,60]
let sum=0
for (let i=0; i<m.length; i++) {
  sum=sum+m[i]
}
console.log(`Average is ${sum/m.length}`);



let items = [250,645,300,900,50]
let i=0
for (let val of items) {
  let offer=val/10
  items[i]=items[i]-offer
  console.log(`Final price of item ${i} is ${items[i]}`);
  i++;
}
console.log(items);



// array methods
// push -- add at end
let fruits = ['apple','orange','dates']
fruits.push('chips','stawberry')
console.log(fruits);

// pop -- used to del something
fruits.pop()
console.log(fruits);

// return new string, not change original string
console.log(fruits.toString());

console.log(fruits);


let mymarks=[12,34,56]
console.log(mymarks);
console.log(mymarks.toString());



// concate
let products=['cosmetics','shoes','outfit','myproducts']
let item=['facepowder','bata','borjan']
console.log(products.concat(item));



// unshift -- add to start (push)
products.unshift('stationary')
console.log(products);

// shift -- delete (pop)
item.shift()
console.log(item);

item.shift()
console.log(item);


// slice -- return piece of array (also make copy)
console.log(products.slice(1,3));
console.log(products.slice(2));


// splice -- change original array (add,remove,replace)
// startindex, del ele after startindex, new-element
let a=[12,34,56,78,90]
a.splice(2,2,100,101)
console.log(a);

// add element
a.splice(2,0,1000)
console.log(a);

// delete element
a.splice(2,1)
console.log(a);


// replace element
a.splice(3,1,10)
console.log(a);

// splice
a.splice(1)
console.log(a);
