import { mount } from 'enzyme';
import CommentBox from './CommentBox';
import React from 'react';
import Root from './Root';
let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});
afterEach(() => {
    wrapped.unmount();
});

it('has text area and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('form').find('button').length).toEqual(1);
});

describe('for the text area', () => {
    beforeEach(() => {
        let fakeEventObject = {
            target: {
                //object must include ALL the props that we have added to the target
                name: 'comment',
                value: 'This is the test comment'
            }
        };

        wrapped.find('textarea').simulate('change', fakeEventObject);
        wrapped.update();
    });

    it('has a text areas that users can type into ', () => {
        // can no longer reference textAreas as it is 'stale' -> need a fresh reference to the component for assertion

        expect(wrapped.find('textarea').prop('value')).toEqual(
            'This is the test comment'
        );
        // expect(wrapped.find("textarea").prop("value")).toEqual("This is the test comment");
    });

    it('clears text area after submit', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});
