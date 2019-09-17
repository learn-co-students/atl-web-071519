import React from 'react';

const BookCard = (props) => {
  return(
    <div className="bookcard">
      <img src={props.book.img} alt='' height='250px' width='200px' />
      <div className="booktitle">
        {props.book.title}
        <br/>
        By: {props.book.author}
      </div>
    </div>
  )
}

export default BookCard;
