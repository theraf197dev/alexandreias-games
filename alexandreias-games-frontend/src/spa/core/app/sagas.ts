import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";

export default function* root() {
  yield all([
    fork(getTranslations),
    fork(watchAppActions),
  ]);
}

export function* watchAppActions() {
  yield takeEvery('DISPATCH_TRANSLATIONS', getTranslations);
}

export function* getTranslations() {
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
