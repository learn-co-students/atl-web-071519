const list = document.querySelector('#list')
const showPanel = document.querySelector('#show-panel')

function main() {
  document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
    addClickListener()
  });
}

function addClickListener() {
  list.addEventListener('click', function(e){
    if(e.target.className === 'book-title'){
      fetchBookDetails(e.target)
    }
  })
}


function fetchBookDetails(bookEl) {
  const id = bookEl.dataset.id
  fetch('http://localhost:3000/books/' + id)
    .then(resp => resp.json())
    .then(book => {
      console.log('data', book)
      renderBookDetails(book)
    })
}

function renderBookDetails(book) {
  const bookTitle = document.createElement('h2')
  const bookImg = document.createElement('img')
  const bookDesc = document.createElement('p')


  bookTitle.innerText = book.title
  bookImg.src = book.img_url
  bookDesc.innerText = book.description

  showPanel.append(bookTitle)
  showPanel.append(bookImg)
  showPanel.append(bookDesc)
  renderLikedUser(book.users)
}

function renderLikedUser(users){
  users.forEach(user => {
    const userTitle = document.createElement('h6')
    userTitle.innerText = user.username
    showPanel.append(userTitle)
  })
}


function fetchBooks() {
  fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(books => {
      console.log('data', books)
      renderBooks(books)
    })
}

function renderBooks(books) {
  books.forEach(book => {
    renderBook(book)
  })
}

function renderBook(book) {
  const bookEl = document.createElement('li')
  bookEl.className = 'book-title'
  bookEl.dataset['id'] = book.id
  bookEl.innerText = book.title

  list.append(bookEl)
}

main()

// event listener for a click
// grab information about the book based on what got click
//  make a fetch request to show a single book






