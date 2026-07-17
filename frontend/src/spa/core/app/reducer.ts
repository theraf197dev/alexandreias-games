
import { reducer as helperReducer } from '../helpers/reducer';

const initialState = {

};

const reducerMap = [

];

function reducer(state = initialState, action) {
    return helperReducer(state, action, reducerMap);
}

export {
    reducer,
};
