import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';


class CommentForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        content: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
onSubmit(e){
  e.preventDefault();
  const { postId } = this.props;
  const newComment = {
    content: this.state.content
  };
  this.props.addComment(postId, newComment);
  this.setState({ content: ''})
}

onChange(e) {
  this.setState({[e.target.name]: e.target.value});
}
  render() {
    return (
        <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup 
                  placeholder="Reply to post"
                  name="content"
                  value={this.state.content}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

CommentForm.propTypes = {
  addComment : PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired
}


export default connect(null, { addComment })(CommentForm);