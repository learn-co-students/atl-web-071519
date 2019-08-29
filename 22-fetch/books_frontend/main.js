function fetchBooks(){
  fetch('https://httpstat.us/403')
    .then(resp => resp.json())
    .then(data => {
      renderBooks(data)
    })
    .catch((err) => {
      console.log('err', err)
    })
}

function renderBooks(books){
  books.forEach((book) => {
    renderBook(book)
  })
}

function renderBook(book){
  const bookDiv = document.createElement('div')
  const titleP = document.createElement('p')

  titleP.innerText = book.title + ' - ' + book.author

  bookDiv.append(titleP)

  const bookListDiv = document.getElementById('book-list')
  bookListDiv.append(bookDiv)
}


function addFormListener(){
  const bookForm = document.querySelector('#book-form')

  bookForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = getFormData();
    postBook(formData)
  })
}

function postBook(formData){
  const reqObj = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
 }

  fetch('http://localhost:3000/books', reqObj)
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      renderBook(data)
    })
    .catch(err => {
      console.log(err)
    })

}


function getFormData(){
  const title = document.querySelector('#form-title').value
  const author= document.querySelector('#form-author').value
  return { title, author }
}
function main(){
  fetchBooks()
  addFormListener()
}


main()




// X. Grab data from the BE and render all those books
//
//
//

 // The purpose of a comedian is not reaffirm your world view. A comedian who is an artist, in my view offends both sides. Because all beliefs are silly. That's the value of the jester is to point at the holes and flaws in your way of life and what you hold dear. What you think matters. When Chappelle 
