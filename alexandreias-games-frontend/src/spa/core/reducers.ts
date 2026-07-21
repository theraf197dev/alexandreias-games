import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as appReducers from '../core/app/reducer';

const combinedReducers = combineReducers({
    appReducer: appReducers.reducer,
    routerReducer,
});

export default combinedReducers;
