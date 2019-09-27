import React from 'react'

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      bio: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/users", {
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
        <h1>Sign Up Here:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="password" name="password" onChange={this.handleChange}/>
          <label htmlFor="password">Bio</label>
          <textarea name="bio" onChange={this.handleChange} value={this.state.bio} cols="30" rows="10" />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}