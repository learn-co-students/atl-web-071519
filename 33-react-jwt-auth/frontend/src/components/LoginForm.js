import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify({
        user: this.state
      })
    }).then(res => res.json())
    .then(data => {
      // Here I pass the JWT token to the profile route through the second argument of "history.push(route, [state])"
      // By passing the JWT token, I can access the token via this.props.location.state inside of the Profile.js component.
      this.props.history.push("/profile", data.jwt)
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  render() {
    return (
      <div>
        <h1>Login Here:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="password" name="password" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}