import React, { Component } from 'react';

class NavBar extends Component {

  render(){
    return(
      <div className="navbar" onClick={this.props.handleClick}>
        <div className="header">
          Book App
        </div>
      </div>
    )
  }
}

export default NavBar;
