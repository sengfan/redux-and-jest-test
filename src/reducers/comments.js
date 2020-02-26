import { SAVE_COMMENT } from './../Actions/types';

export const commentReducer = function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.comment];
        default:
            return state;
    }
};
export default commentReducer;
