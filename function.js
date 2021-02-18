const grid = document.querySelector(".grid");
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
  inputReadStatus1.checked = false;
  inputReadStatus2.checked = false;
}

function book(title, author, numberOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
  clearForm();
}


function submitBook() {
  const readedOrNot = document.querySelector('input[name="readStatus"]:checked').value;
    library.push(new book(inputTitle.value, inputAuthor.value, inputNumberOfPages.value, readedOrNot));
    
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

  const divReadStatus1 = document.createElement("div");
  divReadStatus1.setAttribute("class", "div");
  divReadStatus1.setAttribute("class", "divForm");

  const divReadStatus2 = document.createElement("div");
  divReadStatus2.setAttribute("class", "div");
  divReadStatus2.setAttribute("class", "divForm");

  const lableTitle = document.createElement("label");
  lableTitle.innerHTML = "Title:";
  lableTitle.setAttribute("class", "formLabel");

  const labelAuthor = document.createElement("label");
  labelAuthor.innerHTML = "Author:";
  labelAuthor.setAttribute("class", "formLabel");

  const labelNumberOfPages = document.createElement("label");
  labelNumberOfPages.innerHTML = "Pages:";
  labelNumberOfPages.setAttribute("class", "formLabel");

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

  const inputReadStatus1 = document.createElement("input")
  inputReadStatus1.setAttribute("id", "inputReadStatus1");
  inputReadStatus1.setAttribute("value", "readed");
  inputReadStatus1.setAttribute("type", "radio");
  inputReadStatus1.setAttribute("name", "readStatus")


  const inputReadStatus2 = document.createElement("input");
  inputReadStatus2.setAttribute("id", "inputReadStatus2");
  inputReadStatus2.setAttribute("value", "notReaded");
  inputReadStatus2.setAttribute("type", "radio");
  inputReadStatus2.setAttribute("name", "readStatus");
  
  const labelTest1 = document.createElement("label");
  labelTest1.setAttribute("for", "inputReadStatus1");
  labelTest1.innerHTML = "readed";

  const labelTest2 = document.createElement("label");
  labelTest2.setAttribute("for", "inputReadStatus2");
  labelTest2.innerHTML = "not readed";

  divReadStatus1.appendChild(labelTest1);
  divReadStatus2.appendChild(labelTest2);

  divTitle.appendChild(lableTitle);
  divTitle.appendChild(inputTitle);
  
  divAuthor.appendChild(labelAuthor);
  divAuthor.appendChild(inputAuthor);

  divNumberOfPages.appendChild(labelNumberOfPages);
  divNumberOfPages.appendChild(inputNumberOfPages);
  
  divReadStatus1.appendChild(inputReadStatus1);
  divReadStatus2.appendChild(inputReadStatus2);

  form.appendChild(divTitle);
  form.appendChild(divAuthor);
  form.appendChild(divNumberOfPages);
  form.appendChild(divReadStatus1);
  form.appendChild(divReadStatus2);
  
  formWraper.appendChild(form);
}