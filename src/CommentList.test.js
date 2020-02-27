import { mount } from 'enzyme';

import React from 'react';
import Root from './Root';
import CommentList from './CommentList';
let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    );
});

it('creates one LI per comment', () => {
    
});
