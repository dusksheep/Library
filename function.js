let library = []
const grid = document.querySelector(".grid");
const btnNewBook = document.querySelector(".btnNewBook")
const formDiv = document.querySelector(".formDiv");
window.addEventListener("pageshow", createForm);
const formWraper = document.querySelector("#formWraper");
const form = document.createElement("form");

function book(title, author, numberOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
  form.remove();
}




function submitForm(event) {
    library.push(new book(inputTitle.value, inputAuthor.value, inputNumberOfPages.value, inputReadStatus.value));
    console.log(library[0]);
    btnNewBook.disabled = false;
    event.preventDefault();

}

function createForm() {
  form.innerHTML = "Book info";
  form.setAttribute("class", "form");
  form.addEventListener("submit", submitForm);

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

  const inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("class", "input");
  inputSubmit.setAttribute("id", "inputSubmit");
  inputSubmit.setAttribute("type", "submit");

  const buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "cancel"
  buttonCancel.setAttribute("id", "buttonCancel");

  

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
  form.appendChild(inputSubmit);
  form.appendChild(buttonCancel);

  formWraper.appendChild(form);

  btnNewBook.disabled = true;
}





