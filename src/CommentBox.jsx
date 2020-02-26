import React, { Component } from 'react';
import * as actions from './Actions';
import { connect } from 'react-redux';

export class CommentBox extends Component {
    state = { comment: '' };
    handleChange = event => {
        this.setState({ comment: event.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>add a comment</h4>
                    <textarea
                        name="test"
                        id=""
                        cols="30"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.handleChange}
                    ></textarea>
                    <div>
                        <button type="submit">Submit Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        // explicitly forwarding arguments
        saveComment: comment => {
            // do all your logic here
            comment = comment + 123123123123;
            dispatch(actions.saveComment(comment));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
