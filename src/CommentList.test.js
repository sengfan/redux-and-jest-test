import { mount } from 'enzyme';

import React from 'react';
import Root from './Root';
import CommentList from './CommentList';
import { PureCommentList } from './CommentList';
const mockComments = [
    'Oh, yes this is Comment 1',
    'Oh,my god this Comment 2',
    'Hope you can read chinese, 来点中文'
];



describe('test CommentList with redux', () => {
    const initialState = {
        comments: mockComments
    };
    let wrapped;
    beforeEach(() => {
        wrapped = mount(
            <Root initialState={initialState}>
                <CommentList />
            </Root>
        );
    });
    it('creates one LI per comment', () => {
        expect(wrapped.find('li').length).toEqual(initialState.comments.length);
    });
});




describe('test CommentList without redux but with props', () => {
    let wrapped;
    beforeEach(() => {
        wrapped = mount(<PureCommentList comments={mockComments} />);
    });
    it('creates one LI per comment', () => {
        expect(wrapped.find('li').length).toEqual(mockComments.length);
    });
});
