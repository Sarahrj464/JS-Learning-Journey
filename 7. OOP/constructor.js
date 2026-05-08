// constructor is special method in js
// it is automatically invoke by new keyword
// constructor initialize obj

class ToyotaCar {
  // initialize object
  constructor(brand,mileage) {
    console.log('create new object');
    this.brand=brand
    this.mileage=mileage
  }
  start() {
    console.log('start');  
  }

  stop() {
    console.log('stop');
  }

  // setBrand(brand) {
  //   this.brandName=brand
  // }
}
// if constructor is not defined then new keyword automatically creates it
let fortuner=new ToyotaCar()
console.log(fortuner);

// passing argument
let fortuner1=new ToyotaCar("bmw",10)
console.log(fortuner1);
