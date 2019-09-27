import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to={() => {
          localStorage.clear()
          return "/"
        }}>Logout</Link>
      </div>
    );
  }
}