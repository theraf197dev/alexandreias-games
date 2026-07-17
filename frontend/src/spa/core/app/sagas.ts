import { all, fork, put, take, takeEvery } from "redux-saga/effects";

export default function* root() {
  yield all([
    fork(watchAppActions),
  ]);
}

export function* watchAppActions() {
  
}

