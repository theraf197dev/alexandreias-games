import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore';

import rootSaga from './core/sagas';
import AppConnector from './containers/app/AppConnector';
import type { CustomStore, RootSaga } from '../types/spa/Provider.types';

const ProviderContainer = () => {
    const store = configureStore!() as CustomStore;
    store.runSaga(rootSaga as unknown as RootSaga);

    return (
        <Provider store={store}>
            <AppConnector />
        </Provider>
    );
};

export default ProviderContainer;
