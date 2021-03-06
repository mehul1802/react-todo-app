import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/PostActions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getPostList } from '../reducers/PostReducer'

console.log("Inside Post Container :");

class PostsIndex extends Component {
  constructor(props){
    super(props); 
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return ( 
      <li className="list-group-item" key={post.id}>
        <Link to={`posts/${post.id}`}>
        {post.title}
        </Link>
      </li>
      );
    });
  }

  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    return (
      <div >
        <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
            Add a posts
            </Link>
        </div>
        <h3>Posts:</h3>
        <ul className="list-group"> 
            { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts : getPostList(state) };
}

export default connect(mapStateToProps,{ fetchPosts })(PostsIndex);