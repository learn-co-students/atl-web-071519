import React, {Component} from 'react';

class Books extends Component{
  constructor(props){
    super()
    this.state = {
      books: [
        "Harry Potter",
        "Pride and Prejudice",
        "Game of Thrones",
        "The Immortalists"
      ]
    }
  }

  render(){
    return(
      <div>
      {
        this.state.books.map((book)=>{
          return(
            <div style={{
              margin: 20,
              height: 100,
              width: 200,
              backgroundColor: 'red'
            }}>
              {book}
            </div>
        )})
      }
      </div>
    )
  }
}
export default Books;
