import { state } from '../init/state.js';

export const back = () => {
    state.currentBookId = undefined;
};
