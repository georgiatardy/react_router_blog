import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



export default class BaseLayout extends Component {
  render() {
    return (
      <div>
       <nav className="nav_bar">
         <NavLink className="nav_link" activeClassName="selected" exact to="/">Home Page</NavLink>
         <NavLink className="nav_link" activeClassName="selected" to="/create">Create New Post</NavLink>
         <NavLink className="nav_link" activeClassName="selected" to="/blogs">See Posts</NavLink>
      </nav>
      {this.props.children}
      </div>
    )
  }
}
