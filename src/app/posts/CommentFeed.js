import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getComments } from '../../actions/postActions';

class CommentFeed extends Component {
  componentDidMount() {
		this.props.getComment(this.props.postPath.id)
	}
  render() {
    const { comments } = this.props;
    return comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
  }
}
CommentFeed.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  comments: state.post,

})

const mapDispatchToProps = (dispatch) => {
	return {
		getComment: (id) => dispatch(getComments(id)),
	}
}



export default connect(mapStateToProps, )(CommentFeed);