import type { Action } from "../../../globalTypes/actions.types";

export interface FetchTranslationsPayload {
    locale: string
}

export type FetchTranslations = (locale: string) => Action<FetchTranslationsPayload>

export type UpdateDeviceResolution = () => Action<object>