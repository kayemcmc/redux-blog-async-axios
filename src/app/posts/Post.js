import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import spinner from '../common/spinner';
import { getPost } from '../../actions/postActions';
import PostItem from './PostItem';

class Post extends Component {
  componentDidMount() {
      this.props.getPost(this.props.match.params.id);
  }
  render() {
      const { post, loading } = this.props.post;
      let postContent;
      if(post === null || loading || Object.keys(post).length === 0 ) {
        postContent = <spinner />
      } else {
          postContent = (
              <div><PostItem  post={post} /></div>
          )
      }
    return (
      <div className="post">
        <div className="container">
        <Link to="/feed" className="btn btn-light mb-3">Back to Feed</Link>
            <div className="row">
            {postContent}
            </div>
        </div>  
      </div>
    )
  }
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    post: state.post
  });
  
  export default connect(mapStateToProps, { getPost })(Post);