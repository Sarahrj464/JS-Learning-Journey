// 🟢 Level 1 — Beginner (Class & Objects Basics)
// Q1. Create a Person class with properties name and age, and a method introduce() that prints:
// "Hi, I'm Ali and I'm 20 years old."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
  }
}
const p = new Person("Sarah", 22)
p.introduce()

// Q2. Create a Rectangle class that takes width and height, and has two methods — area() and perimeter().
class Rectangle {
  constructor(width, height) {
    this.w = width;
    this.h = height;
  }
  area() {
    return this.w * this.h;
  }
  perimeter() {
    return 2 * (this.w + this.h);
  }
}
const r = new Rectangle(2, 3);
console.log(r.area());
console.log(r.perimeter());


// 🟡 Level 2 — Intermediate (Encapsulation + Inheritance)
// Q6. Create a BankAccount class with a private #balance. Add methods:
// deposit(amount) — adds money
// withdraw(amount) — removes money (can't go below 0)
// getBalance() — returns current balance

class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Insufficient funds...');
    }
    else {
      this.#balance-=amount
    }
  }
  getBalance() {
    return this.#balance;
  }
}
const b = new BankAccount();
b.deposit(1500);
b.withdraw(200);
console.log("Current Balance is:",b.getBalance());



// Q7. Create a Animal parent class with name and eat() method. Then create two child classes — Dog with bark() and Cat with meow(). Both should inherit eat() from Animal.
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating...`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says bark...`);
  }
}
class Cat extends Animal {
  meow() {
    super.eat();
    console.log(`${this.name} says moew...`);
  }
}
const c = new Cat("Brounu");
const d = new Dog("Brounu");
c.meow();
d.bark();





// Q10. Create a Library class that:

// Stores a list of books (array)
// Has addBook(book), removeBook(book), and showBooks() methods
// Tracks total number of books with a static property

class Library {
  static totalNoOfBooks=0
  constructor(name) {
    this.name=name
    this.book = [];
  }
  addBook(book) {
    this.book.push(book);
    Library.totalNoOfBooks++
    console.log(`${this.book} has added to ${this.name}`);
  }

  removeBook(book) {
    const idx=this.book.indexOf(book)

    if (idx!==-1) {
      this.book.splice(idx,1)
      console.log(`${book} was removed from ${this.name}`);
    }
    else {      
      console.log(`${book} was not found!`);
    }
  }
  showBook(book) {
    if (this.book.length==0) {
      console.log('Book library was empty');
      return
    }
    else {
      console.log('Book in City Library are: ');
      this.book.forEach((book,i) => {
        console.log(`${i+1} ${book}`);
      });
    }
  }
}
const lib = new Library("City Library");
lib.addBook("Harry Potter");
lib.addBook("Jannat ke patey");
lib.addBook("Mushaf");
lib.addBook("Amerbail");
lib.removeBook("Jannat ke patey")
lib.showBook()
console.log(`Total number of books ever add in City Library is: ${Library.totalNoOfBooks}`);
