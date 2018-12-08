import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost , deletePost } from '../actions/PostActions';

console.log("Inside POST Show:"); 
class PostShow extends Component {
    
    componentDidMount(){
        // console.log(this.props);
        // console.log(this.props.match.params.id);
        if(!this.props.post){    
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        }   
      
    }

    onDeleteClick() {
        console.log("Delete Clicked")
        console.log(this.props);
        const  deleteID  = this.props.match.params.id;
        this.props.deletePost(deleteID, () => {
            this.props.history.push('/');
        });
    }

    render(){
        const { post } = this.props;

        if(!post) {
            return <div>Loading </div>
        }
        // console.log(this.props.post)
        return(
            <div>
                <Link to="/" className="btn btn-primary"> Back </Link>
                <button 
                 className="btn btn-danger pull-xs-right"
                 onClick={this.onDeleteClick.bind(this)}
                >
                Delete Post
                </button> 
                <h3> { post.title } </h3>
                <h6> Categories : { post.categories } </h6>
                <p> { post.content } </p>
            </div>
        )
        
    }

}

function mapStateToProps({ posts }, ownProps){
    console.log("hey");
    console.log(ownProps);
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{ fetchPost , deletePost })(PostShow);