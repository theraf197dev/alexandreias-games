import type { Store, UnknownAction } from "redux";
import type { AllEffect, ForkEffect } from "redux-saga/effects";

export type RootSaga = Generator<AllEffect<Generator<AllEffect<ForkEffect<void>>, void, unknown>>, void, unknown>;

export interface CustomStore extends Store<unknown, UnknownAction, unknown> {
    runSaga: (rootSaga: RootSaga) => void;
}
