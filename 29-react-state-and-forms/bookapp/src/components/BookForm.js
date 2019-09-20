import React from 'react';

class BookForm extends React.Component { 

    state ={title: '',
            author: '',
            img: ''
            }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBook(this.state)
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
    

    render(){
        return(
        <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input type='text' name='title' placeholder='Title' value={this.state.title} onChange={this.handleInput} />
            <input type='text' name='author' placeholder='Author' value={this.state.author} onChange={this.handleInput} />
            <input type='text' name='img' placeholder='Image link' value={this.state.img} onChange={this.handleInput} />
            <input type='submit' value='Submit' />
        </form>
        )
    }
}

export default BookForm