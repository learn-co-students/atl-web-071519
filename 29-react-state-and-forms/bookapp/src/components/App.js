import React from 'react';
import NavBar from './NavBar';
import BookContainer from './BookContainer';
import BookForm from './BookForm'

import '../styles/App.css';

class App extends React.Component {

  state = {
    books: []
  }

  componentDidMount = () => {
    this.fetchBooks()
  }

  componentDidUpdate = (prevProps, prevState) =>{
    if(prevState.books !== this.state.books){
    console.log('updated')
    }
  }

  fetchBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => {
      //DONT
      //this.state.books = data

      //Do this
      console.log(data)
      this.setState({ books: data})
    })
  }

  addBook = (book) => {
    console.log(book)

    this.setState({
      books: [...this.state.books, book]
    })
}

  handleClick = (event) => {
    this.fetchBooks()
  }

  handleDelete = (e) => {
    let newBooksArray = [...this.state.books]
    this.setState({books: newBooksArray.filter(book => book.title !== e.target.id)})
    
  }

  render(){
    console.log('RENDERED')
    // console.log('After Input:',this.state)

    return (
      <div className="parent">
        <NavBar handleClick={this.handleClick} />
        <BookForm addBook={this.addBook}/>
        <BookContainer handleDelete={this.handleDelete} books={this.state.books} />
      </div>
    );
  }
}

export default App;
