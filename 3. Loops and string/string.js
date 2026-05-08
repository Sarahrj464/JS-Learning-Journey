let str1="Sarah"
let str2="ALi"
let str3=str1+str2
console.log(str1,str2);
console.log(str3.length);

// access individual characters -- index/indices
console.log(str1[0]);


// template literals -- special type string
let sentence=`this is template literal`
console.log(sentence);
console.log(typeof sentence);   //string


// use of template literal
let obj = {
  item:"pen",
  price:20
}
// console.log(obj.item,obj.price);

let output = `cost of ${obj.item} is ${obj.price} dollars`
console.log(output);


// string interpolation
// create strings by doing substitution of placeholders

let specialStr=`template literal ${1+2+3}`
console.log(specialStr);



// escape characters
// \n is single character
let name='Sarah\nRJ'
console.log(name.length);


// string methods (immutable) ---> built-in functions to manipulate string
// it does not change original string
// when we use method, a new string is created
mystr="sarah"
// str.toUpperCase(mystr)
console.log(mystr.toUpperCase(mystr))


// // trim
newstr="    amirah   "
console.log(newstr.trim())


// // slice -- ending value not included
let s="hello"
console.log(s.slice(1,4))  //ello
console.log(s.slice(2))  //llo
console.log(s.slice(0))  //hello


// concatenate
let s1="hello"
let s2="bye"
// let res=s1+s2
let res=s1+"123"
console.log(res);
console.log(s1.concat(s2));




// replace/replaceall
let mystring="hello"
console.log( mystring.replace('l','m'));  //only replace at first 
console.log( mystring.replaceAll('l','m'));  //all same char replace 


// charat
let newstring="welcome"
newstring[0]="S"
console.log(newstring.charAt(0));  //print w not S



