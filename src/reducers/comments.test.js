import { SAVE_COMMENT } from './../Actions/types';
import { commentReducer } from './comments';

// example to properly hands actions with different type
it('handles action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        comment: 'New Comment'
    };

    const newState = commentReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentReducer([], { type: 'asdfasdfasdf' });
    expect(newState).toEqual([]);
});
