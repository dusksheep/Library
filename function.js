const grid = document.querySelector(".grid");
const buttonNewBook = document.querySelector("#buttonNewBook")
const formDiv = document.querySelector(".formDiv");
const formWraper = document.querySelector("#formWraper");
const form = document.createElement("form");
const buttonSubmitForm = document.querySelector("#buttonSubmitForm");
const bookList = document.querySelector(".li");
const buttonClearAll = document.querySelector("#buttonClearAll")

let library = []
window.addEventListener("pageshow", createForm);
buttonSubmitForm.addEventListener("click", submitBook);
buttonClearAll.addEventListener("click", clearLibrary);

function clearLibrary() {
  library.length = 0;
  bookList.innerHTML = "";
}



function clearForm() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputNumberOfPages.value = "";
  inputReadStatus.value = "";
}

function book(title, author, numberOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
  clearForm();
}


function submitBook() {
    library.push(new book(inputTitle.value, inputAuthor.value, inputNumberOfPages.value, inputReadStatus.value));
    
    showBooks();
    
    function showBooks() {
      bookList.innerHTML = "";
      library.forEach(showItem);
      function showItem(value, index, array) {
        const bookItem = document.createElement("ul");
        bookItem.innerHTML ="Title: " + value["title"] + ", author: " + value["author"] + ", # of pages: " + 
        value["numberOfPages"] + " read status: " + value["readStatus"];
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "delete this book";
        //implement a function to the close button to delete this object from the array library
        bookItem.appendChild(closeButton);
        bookList.appendChild(bookItem);
      }
    }
}

function createForm() {
  form.innerHTML = "Book info";
  form.setAttribute("class", "form");

  const divTitle = document.createElement("div");
  divTitle.setAttribute("class", "div");
  divTitle.setAttribute("class", "divForm");

  const divAuthor = document.createElement("div");
  divAuthor.setAttribute("class", "div");
  divAuthor.setAttribute("class", "divForm");

  const divNumberOfPages = document.createElement("div");
  divNumberOfPages.setAttribute("class", "div");
  divNumberOfPages.setAttribute("class", "divForm");

  const divReadStatus = document.createElement("div");
  divReadStatus.setAttribute("class", "div");
  divReadStatus.setAttribute("class", "divForm");

  const lableTitle = document.createElement("label");
  lableTitle.innerHTML = "Title:";
  lableTitle.setAttribute("class", "formLabel");

  const labelAuthor = document.createElement("label");
  labelAuthor.innerHTML = "Author:";
  labelAuthor.setAttribute("class", "formLabel");

  const labelNumberOfPages = document.createElement("label");
  labelNumberOfPages.innerHTML = "Pages:";
  labelNumberOfPages.setAttribute("class", "formLabel");

  const labelReadStatus = document.createElement("label");
  labelReadStatus.innerHTML = "Read status:";
  labelReadStatus.setAttribute("class", "formLabel");

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("class", "input");
  inputTitle.setAttribute("id", "inputTitle");
  inputTitle.setAttribute("type", "text");

  const inputAuthor = document.createElement("input");
  inputAuthor.setAttribute("class", "input");
  inputAuthor.setAttribute("id", "inputAuthor");
  inputAuthor.setAttribute("type", "text");

  const inputNumberOfPages = document.createElement("input");
  inputNumberOfPages.setAttribute("class", "input");
  inputNumberOfPages.setAttribute("id", "inputNumberOfPages");
  inputNumberOfPages.setAttribute("type", "text");

  const inputReadStatus = document.createElement("input")
  inputReadStatus.setAttribute("class", "input");
  inputReadStatus.setAttribute("id", "inputReadStatus");
  inputReadStatus.setAttribute("type", "text");

  divTitle.appendChild(lableTitle);
  divTitle.appendChild(inputTitle);
  
  divAuthor.appendChild(labelAuthor);
  divAuthor.appendChild(inputAuthor);

  divNumberOfPages.appendChild(labelNumberOfPages);
  divNumberOfPages.appendChild(inputNumberOfPages);
  
  divReadStatus.appendChild(labelReadStatus);
  divReadStatus.appendChild(inputReadStatus);

  form.appendChild(divTitle);
  form.appendChild(divAuthor);
  form.appendChild(divNumberOfPages);
  form.appendChild(divReadStatus);
  
  formWraper.appendChild(form);
}