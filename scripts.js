console.log('Connected')


const myLibrary = [];

function Book(title, author, noOfPages, haveRead) {
    if(!new.target) throw new Error("Please use new keyword as this is a constructor. Try again");

    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.haveRead = haveRead;

}

function addBookToLibrary(title, author, noOfPages, haveRead) {
  const book = {
    uuid: crypto.randomUUID(),
    book: new Book(title, author, noOfPages, haveRead)
  }

  myLibrary.push(book);
  
}

