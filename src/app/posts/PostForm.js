import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';


class PostForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        description: '',
        id: '',
        author: '',
        publish_date: Date.now(),
        slug: '',
        content: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
onSubmit(e){
  e.preventDefault();
  const newPost = {
    content: this.state.content
  };
  this.props.addPost(newPost);
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
            Say Something...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup 
                  placeholder="Create a post"
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

PostForm.propTypes = {
  addPost : PropTypes.func.isRequired,
}


export default connect(null, { addPost })(PostForm);