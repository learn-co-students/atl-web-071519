import React from 'react';
import BookCard from './BookCard';

const BookContainer = (props) => {
  return(
    <div className="maincontainer">
      {
        props.books.map((book) => <BookCard key={book.title} book={book} />)
      }
    </div>
  )
}

export default BookContainer;
