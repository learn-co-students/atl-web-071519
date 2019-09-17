import React from 'react';
import NavBar from './NavBar';
import BookContainer from './BookContainer';

import books from '../books.js';

import '../styles/App.css';

class App extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     books: books
  //   }
  // }

  state = {
    books: books
  }

  fetchBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => {
      //DONT
      //this.state.books = data

      //Do this
      this.setState({ books: data})
    })
  }

  handleClick = (event) => {
    this.fetchBooks()
  }

  render(){
    console.log('RENDERED')

    return (
      <div className="parent">
        <NavBar handleClick={this.handleClick} />
        <BookContainer books={this.state.books} />
      </div>
    );
  }
}

export default App;
