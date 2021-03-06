import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ShowPost from './ShowPost';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => {
     return results.json();
    })

    .then(data => {
      // console.log(data);
      this.setState({entries: data});
    });
  }

  render() {

    const blogEntry = this.state.entries.map((entry) => {
      return (
        <Link to={`/blogs/${entry._id}`} key={entry._id}>{entry.title}</Link>
      )
    });

    return(
      <div className="container">
        <h1>Blogs</h1>
        <section className="navbar-nav">
          {blogEntry}
        </section>
      </div>
    )
  }
}
