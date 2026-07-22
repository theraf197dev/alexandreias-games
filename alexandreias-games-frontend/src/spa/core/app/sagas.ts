import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import { AppAction } from "../../../types/enums/actions.enum.types";
import type { FetchTranslationsPayload, UpdateDeviceResolution } from "../../../types/spa/core/app/actions.types";

export default function* root() {
  yield all([
    fork(fetchTranslations),
    fork(updateDeviceResolution),
    fork(watchAppActions),
  ]);
}

export function* watchAppActions() {
  yield takeEvery(AppAction.DISPATCH_TRANSLATIONS, fetchTranslations);
  yield takeEvery(AppAction.DISPATCH_DEVICE_RESOLUTION, updateDeviceResolution);
}

export function* fetchTranslations(): Generator<unknown, void, FetchTranslationsPayload> {
  const payload = yield take(AppAction.DISPATCH_TRANSLATIONS);

  // const func = (locale) => fetch(`/api/translations?${locale}`).then((res) => res.json());
  // const func = (locale) => fetch('/api/translations').then((res) => res.json());

  // const translations = yield call(func, payload.locale);

  // yield put({
  //   type: AppAction.UPDATE_TRANSLATIONS,
  //   payload: {
  //     translations,
  //   }
  // })
}

export function* updateDeviceResolution(): Generator<unknown, void, UpdateDeviceResolution> {
  yield take(AppAction.DISPATCH_DEVICE_RESOLUTION);

  yield put({
    type: AppAction.UPDATE_DEVICE,
    payload: {
      isDesktop: window.innerWidth > 780,
    },
  });
}
