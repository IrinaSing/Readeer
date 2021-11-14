import { router } from '../init/router.js';
import { state } from '../init/state.js';

export const doLogout = () => {
    state.token = undefined;
    state.isSignedIn = false;
    state.username = '';
    
    router.navigate('/');
};
