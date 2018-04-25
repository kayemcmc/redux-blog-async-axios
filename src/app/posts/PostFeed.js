import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    return(
        <div>
       { posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    ) 
  }
}


export default PostFeed;