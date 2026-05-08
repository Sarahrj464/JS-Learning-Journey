// Q10. Create a Library class that:

// Stores a list of books (array)
// Has addBook(book), removeBook(book), and showBooks() methods
// Tracks total number of books with a static property


class Library {
  static TotalNoOfBooks=0
  constructor(name) {
    this.name=name
    this.book=[]
  }
  addBook(book) {
    this.book.push(book)
    Library.TotalNoOfBooks++
    console.log(`${book} was add in ${this.name}`);
  }
  removeBook(book) {
    const index=this.book.indexOf(book)
    if (index!=-1) {
      this.book.splice(index,1)
      console.log(`${book} was removed from ${this.name}`);
    }
    else {
      console.log(`${book} was not found`);
    }
  }

  showBooks() {
    if (this.book.length==0) {
      console.log("No Book in library");
    }
    else {
      console.log(`Books in ${this.name}:`);
      this.book.forEach((book,i)=>{
        console.log(`${i+1} ${book}`);
      })
    }
  }
}

const lib=new Library("City Library")
// console.log(lib);
lib.addBook("Mushaf")
lib.addBook("Amerbail")
lib.addBook("Kashaf")
lib.addBook("Harry Potter")

lib.removeBook("Kashaf")

lib.showBooks()
console.log(`Total books ever added: ${Library.TotalNoOfBooks}`);
