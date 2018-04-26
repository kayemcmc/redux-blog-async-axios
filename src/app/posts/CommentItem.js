import React, { Component } from 'react';
import PropTypes from 'prop-types';


const CommentItem = ({ comment }) => {
  return (
    <div className="card my-4">
      <div className="card-footer">
          <img src="https://www.gravatar.com/avatar/anything?s=200&d=mm" className="comment-author-img" style={{width: '40px'}} />
        &nbsp;
       <p>
        My Name is Comment Maker
        </p>
        
      </div>
      <div>
      <p className="card-text pl-3">{comment.content}</p>
    </div>
    </div>
  );
};



CommentItem.propTypes = {
    comment: PropTypes.object.isRequired
}

export default CommentItem;