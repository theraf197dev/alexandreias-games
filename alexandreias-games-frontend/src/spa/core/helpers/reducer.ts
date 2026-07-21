import { mergeObject } from './utils';

function reducer(state, action, reducerMap) {
    const isValidAction = reducerMap.indexOf(action.type) !== -1;

    return isValidAction ? mergeObject(state, action.payload) : state;
}

export {
    reducer,
};
