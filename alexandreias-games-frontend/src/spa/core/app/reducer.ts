
import { reducer as helperReducer } from '../helpers/reducer';

const initialState = {
    isDesktop: true,
    translations: null,
};

const reducerMap = [
    'UPDATE_TRANSLATIONS',
    'UPDATE_DEVICE',
];

function reducer(state = initialState, action) {
    return helperReducer(state, action, reducerMap);
}

export {
    reducer,
};
