import { all } from 'redux-saga/effects';
import appSagas from './app/sagas';

export default function* sagas() {
    yield all([
        appSagas(),
    ]);
}
