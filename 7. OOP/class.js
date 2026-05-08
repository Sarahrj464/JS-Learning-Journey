// classes -- template or blueprint to create objects
// objects creating using class have some state (variables) and behaviors (functions)

// classes are used when we make multiple objects on same template

class ToyotaCar {
  start() {
    console.log('start');  
  }

  stop() {
    console.log('stop');
  }

  setBrand(brand) {
    // this is each individual obj
    // this is obj property
    this.brandName=brand
  }
}

// create new object using class
let fortuner = new ToyotaCar()
fortuner.setBrand('hival')
let bmw = new ToyotaCar()