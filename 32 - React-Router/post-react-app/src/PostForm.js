import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class PostForm extends React.Component { 
    state = {
        title: null,
        body: null,
        userId: null,
        redirect: false
    }

    createPost = () => {
    console.log("created post")
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: this.state.title,
            body: this.state.body,
            userId: Number(this.state.userId)
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then((json) => this.props.addNewPost(json))
        this.setState({redirect: true})
    }
    
    handleInputs = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

render() {

    return (
        this.state.redirect ? <Redirect to="/posts" /> : 
        <div>
            <h1 style={{ "textAlign": "center" }}>New Post Form</h1>
            <Container style={{'width': '80%'}}>
        <Form onSubmit={this.createPost}>
            <Form.Input
                placeholder='title'
                onChange={this.handleInputs}
                name="title" />
            <Form.Input
                placeholder='description'
                onChange={this.handleInputs}
                name="body"
            />
            <Form.Input
                placeholder='user id'
                onChange={this.handleInputs}
                name="userId"/>
                 <Form.Input type='submit' />
                </Form>
            </Container>
        </div>
    )
}
}

export default PostForm