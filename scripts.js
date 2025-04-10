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

addBookToLibrary("delete", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);

addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);
addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);
addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);
addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false); 

addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);
addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);
addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);
addBookToLibrary("Book 3", "Its a me", 30, false);  


function displayBook(){
  // get the main div
  const displayArea = document.querySelector(".main");

  // loop over the library object
  for(let book of myLibrary){
    const card = document.createElement('div');
    card.setAttribute("style", 
      `border: 1px solid black; border-radius: 10px; padding: 10px; width: 20rem; white-space: wrap; overflow: auto;`)
    
    // get the book
    let actualBook = book.book;

    // get details and add to card
    const title = document.createElement('p');
    title.innerText = `Title : ${actualBook.title}`;
    card.appendChild(title);

    const author = document.createElement('p');
    author.innerText = `Author : ${actualBook.author}`;
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.innerText = `Pages : ${actualBook.noOfPages}`;
    card.appendChild(pages);

    const haveRead = document.createElement('p');
    haveRead.innerText = `Completed : ${actualBook.haveRead? 'Yes':'No'}`;
    card.appendChild(haveRead);

    const removeButton = document.createElement('button');
    removeButton.innerText = "delete"
    card.appendChild(removeButton);


    function completeButtonCreator(){
    const completeButton = document.createElement('button');
    completeButton.innerText = "complete";
    card.appendChild(completeButton);
    completeButton.addEventListener("click", ()=>{
      actualBook.haveRead = true;
      changeCardColor();
      card.removeChild(completeButton);
    })
    }
    if(!actualBook.haveRead) completeButtonCreator();

    // color based on completion
    function changeCardColor(){
      let color = actualBook.haveRead? "#90EE90":"#FF7F7F"
      card.style.backgroundColor = color;
    }
    changeCardColor();
    
    // add card to display
    displayArea.appendChild(card);

    removeButton.addEventListener("click", ()=>{
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayArea.removeChild(card);
    });

  }

}

displayBook();
