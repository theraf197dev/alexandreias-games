import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";

export default function* root() {
  yield all([
    fork(fetchTranslations),
    fork(updateDeviceResolution),
    fork(watchAppActions),
  ]);
}

export function* watchAppActions() {
  yield takeEvery('DISPATCH_TRANSLATIONS', fetchTranslations);
  yield takeEvery('DISPATCH_DEVICE_RESOLUTION', updateDeviceResolution);
}

export function* fetchTranslations() {
  const payload = yield take('DISPATCH_TRANSLATIONS');

  // const func = (locale) => fetch(`/api/translations?${locale}`).then((res) => res.json());
  const func = (locale) => fetch('/api/translations').then((res) => res.json());

  const translations = yield call(func, payload.locale);

  yield put({
    type: 'UPDATE_TRANSLATIONS',
    payload: {
      translations,
    }
  })
}

export function* updateDeviceResolution() {
  yield take('DISPATCH_DEVICE_RESOLUTION');

  yield put({
    type: 'UPDATE_DEVICE',
    payload: {
      isDesktop: window.innerWidth > 780,
    },
  });
}
