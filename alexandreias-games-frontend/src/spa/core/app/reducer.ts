
import { reducer as helperReducer } from '../helpers/reducer';

const initialState = {
    translations: null,
};

const reducerMap = [
    'UPDATE_TRANSLATIONS'
];

function reducer(state = initialState, action) {
    return helperReducer(state, action, reducerMap);
}

export {
    reducer,
};
