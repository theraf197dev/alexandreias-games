
import { AppAction } from '../../../types/enums/actions.enum.types';
import type { AppReducer } from '../../../types/globalTypes/state.types';
import type { AppReducerMap } from '../../../types/spa/core/app/reducer.types';
import { reducer as helperReducer } from '../helpers/reducer';

const initialState: AppReducer = {
    isDesktop: true,
    translations: null,
};

const reducerMap: AppReducerMap = [
    AppAction.UPDATE_DEVICE,
    AppAction.UPDATE_TRANSLATIONS,
];

function reducer(state = initialState, action) {
    return helperReducer(state, action, reducerMap);
}

export {
    reducer,
};
