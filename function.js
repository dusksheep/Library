const grid = document.querySelector(".grid");
const formDiv = document.querySelector(".formDiv");
const formWraper = document.querySelector("#formWraper");
const form = document.createElement("form");
const buttonSubmitForm = document.querySelector("#buttonSubmitForm");
const bookList = document.querySelector(".li");
const buttonClearAll = document.querySelector("#buttonClearAll")
const labelBookCounter = 0;

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
        bookItem.innerHTML ="Title: " + value["title"] + ", Author: " + value["author"] + ", " + 
        value["numberOfPages"] + " pages. " + "Status: " + value["readStatus"];
        const closeButton = document.createElement("button");
        closeButton.setAttribute("id", "closeButton");
        closeButton.innerHTML = "Remove book";
        closeButton.addEventListener("click", removeNode);
        function removeNode() {
          bookList.removeChild(bookItem);
          library.splice(index, 1);
        }
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
  divReadStatus1.setAttribute("id", "divReadStatus1");

  const divReadStatus2 = document.createElement("div");
  divReadStatus2.setAttribute("class", "div");
  divReadStatus2.setAttribute("id", "divReadStatus2");

  const divReadStatus3 = document.createElement("div");
  divReadStatus3.setAttribute("class", "div");
  divReadStatus3.setAttribute("id", "divReadStatus3");

  const lableTitle = document.createElement("label");
  lableTitle.innerHTML = "Title:";
  lableTitle.setAttribute("class", "formLabel");

  const labelAuthor = document.createElement("label");
  labelAuthor.innerHTML = "Author:";
  labelAuthor.setAttribute("class", "formLabel");

  const labelNumberOfPages = document.createElement("label");
  labelNumberOfPages.innerHTML = "Pages:";
  labelNumberOfPages.setAttribute("class", "formLabel");

  const labelReadStatus1 = document.createElement("label");
  labelReadStatus1.setAttribute("for", "labelReadStatus1");
  labelReadStatus1.innerHTML = "Readed";

  const labelReadStatus2 = document.createElement("label");
  labelReadStatus2.setAttribute("for", "labelReadStatus2");
  labelReadStatus2.innerHTML = "Not readed";

  const labelReadStatus3 = document.createElement("label");
  labelReadStatus3.setAttribute("id", "labelReadStatus3");
  labelReadStatus3.innerHTML = "Status";

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
  inputReadStatus2.setAttribute("value", "Not readed");
  inputReadStatus2.setAttribute("type", "radio");
  inputReadStatus2.setAttribute("name", "readStatus");
  
  divReadStatus1.appendChild(inputReadStatus1);
  divReadStatus2.appendChild(inputReadStatus2);
  divReadStatus1.appendChild(labelReadStatus1);
  divReadStatus2.appendChild(labelReadStatus2);
  divReadStatus3.appendChild(labelReadStatus3);
  divReadStatus3.appendChild(divReadStatus1);
  divReadStatus3.appendChild(divReadStatus2);

  divTitle.appendChild(lableTitle);
  divTitle.appendChild(inputTitle);
  
  divAuthor.appendChild(labelAuthor);
  divAuthor.appendChild(inputAuthor);

  divNumberOfPages.appendChild(labelNumberOfPages);
  divNumberOfPages.appendChild(inputNumberOfPages);

  form.appendChild(divTitle);
  form.appendChild(divAuthor);
  form.appendChild(divNumberOfPages);
  form.appendChild(divReadStatus3);
  
  
  formWraper.appendChild(form);
}