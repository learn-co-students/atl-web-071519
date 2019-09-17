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
    books: books,
    title: '',
    author: '',
    img: ''
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

  handleInput = (event) => {

    console.log('Before Input:',this.state)

    if(event.target.name==='title'){
      this.setState({title: event.target.value})
    }else if (event.target.name==='author') {
      this.setState({author: event.target.value})
    }else{
      this.setState({img: event.target.value})
    }
  }

  handleClick = (event) => {
    this.fetchBooks()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }

    const newBooksArray = [...this.state.books, newBook]

    this.setState({books: newBooksArray})
  }

  render(){
    console.log('RENDERED')
    console.log('After Input:',this.state)

    return (
      <div className="parent">
        <NavBar handleClick={this.handleClick} />

        <form onSubmit={this.props.handleSubmit}>
          <input type='text' name='title' placeholder='Title' value={this.state.title} onChange={this.handleInput} />
          <input type='text' name='author' placeholder='Author' value={this.state.author} onChange={this.handleInput} />
          <input type='text' name='img' placeholder='Image link' value={this.state.img} onChange={this.handleInput} />
          <input type='submit' value='Submit' />
        </form>

        <BookContainer books={this.state.books} />
      </div>
    );
  }
}

export default App;
