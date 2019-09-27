import React from 'react'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      bio: ''
    }
  }

  componentDidMount() {
    // I use the JWT token to access the User's profile via the 'Authorization' header
    fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json", 
        "Authorization": `Bearer ${this.props.location.state}`
      }
    }).then(res => res.json())
    .then(data => this.setState({
      username: data.username,
      bio: data.bio 
    }))
  }

  render() {
    return (
      <div>
        <h1>User's Profile</h1>
        <p>Username: {this.state.username}</p>
        <p>Bio: {this.state.bio}</p>
      </div>
    );
  }
} 