import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import CommentBox from './CommentBox';
let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});
it('shows comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});


