let DATA="secret information"
class User {
  constructor(name,email) {
    this.name=name
    this.email=email
  }
  viewData() {
    // console.log(`Your name is ${this.name} and email is ${this.email} `);
    console.log(`Data: ${DATA}`);
  }
}
let userObj=new User("Sarah","sam123@gmail.com")
let userObj1=new User("Amirah","am26@gmail.com")
userObj.viewData()
userObj1.viewData()


// qs2
class Admin extends User{
  constructor(name,email) {
    super(name,email)
  }
  editData() {
    console.log('contain new data');
  }
}
let adminObj=new Admin("Ali","ali@gmail.com")
adminObj.editData()