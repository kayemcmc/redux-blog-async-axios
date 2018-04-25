import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import gravatar from '../img/gravatar.jpg';
import { deletePost } from '../../actions/postActions';



class PostItem extends Component {
    onDeleteClick(id) {
        this.props.deletePost(id);
    }
  render() {
      const { post } = this.props;
    return (
        <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            
              <img className="rounded-circle d-none d-md-block" src={gravatar}
                alt="gravatar" style={{width: '120px'}} />
            <br />
            <p className="text-center">{post.author}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.content}</p>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-info fas fa-thumbs-up"></i>
              <span className="badge badge-light">4</span>
            </button>
            <button type="button" className="btn btn-light mr-1">
              <i className="text-secondary fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${post.id}`} className="btn btn-info mr-1">
              Comments
            </Link>
            <button 
                type="button" 
                className="btn btn-danger mr-1"
                onClick={this.onDeleteClick.bind(this, post.id)}>
              <i className="fas fa-times"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}

export default connect(null, { deletePost })(PostItem);