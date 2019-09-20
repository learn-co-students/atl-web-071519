import React from 'react';

class BookCard extends React.Component {

  componentWillUnmount=()=>{
    console.log('unmounted')
  }

  render(){
  return(
    <div className="bookcard">
      <img src={this.props.book.img} alt='' height='250px' width='200px' />
      <div className="booktitle">
        {this.props.book.title}
        <br/>
        By: {this.props.book.author}
      </div>
      <button id={this.props.book.title} onClick={(e)=> this.props.handleDelete(e)}>Delete</button>
    </div>
  )}
}

export default BookCard;
