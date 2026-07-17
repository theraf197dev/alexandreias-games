import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore';

import rootSaga from './core/sagas';
import AppConnector from './containers/app/AppConnector';

export default (props) => {
    const store = configureStore();
    store.runSaga(rootSaga);

    return (
        <Provider store={store}>
            <AppConnector />
        </Provider>
    );
};
