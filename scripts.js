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

addBookToLibrary("Book 1", "Its a me", 30, false);
addBookToLibrary("Book 2", "Its a me", 30, true);


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

// adding book to the library

const addBook = document.querySelector('.addBook')

addBook.addEventListener("click", ()=>{
  const dialog = document.querySelector('dialog');
  dialog.showModal();
})

// takes data after pressing the submit button

const submitButton = document.querySelector('form button[type="submit"]');

submitButton.addEventListener("click", (e)=>{
  // validation
  const form = document.querySelector("form");
  if(!form.checkValidity()) return;

  e.preventDefault();
  const title = document.querySelector("form label[for='title'] input");
  const author = document.querySelector("form label[for='author'] input");
  const noOfPages = document.querySelector("form label[for='noOfPages'] input");
  const haveRead = document.querySelector("form label[for='haveRead'] input");

  addBookToLibrary(title.value, author.value, +noOfPages.value, haveRead.checked);

  // displaying it
  const displayArea = document.querySelector(".main");

  const book = myLibrary.at(myLibrary.length-1);

  const card = document.createElement('div');
    card.setAttribute("style", 
      `border: 1px solid black; border-radius: 10px; padding: 10px; width: 20rem; white-space: wrap; overflow: auto;`)
    
    // get the book
    let actualBook = book.book;

    // get details and add to card
    const titleReal = document.createElement('p');
    title.innerText = `Title : ${actualBook.title}`;
    card.appendChild(titleReal);

    const authorReal = document.createElement('p');
    author.innerText = `Author : ${actualBook.author}`;
    card.appendChild(authorReal);

    const pages = document.createElement('p');
    pages.innerText = `Pages : ${actualBook.noOfPages}`;
    card.appendChild(pages);

    const haveReadReal = document.createElement('p');
    haveRead.innerText = `Completed : ${actualBook.haveRead? 'Yes':'No'}`;
    card.appendChild(haveReadReal);

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

  
  document.querySelector("dialog").close();

})

// logic for closing the dialog box

const closeButton = document.querySelector('form button[class="closeIt"]').addEventListener("click",
  ()=>{
    document.querySelector("dialog").close();
  }
);

displayBook();
