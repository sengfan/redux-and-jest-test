import { saveComment } from './index';
import { SAVE_COMMENT } from './types';

describe('saveComment', () => {
    it('have the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('havs the correct payload data', () => {
        const action = saveComment('example data');
        expect(action.comment).toEqual('example data');
    });
});
