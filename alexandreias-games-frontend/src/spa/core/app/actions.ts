import { AppAction } from "../../../types/enums/actions.enum.types";
import type { FetchTranslations, UpdateDeviceResolution } from "../../../types/spa/core/app/actions.types";

const fetchTranslations: FetchTranslations = (locale) => ({
    payload: {
        locale,
    },
    type: AppAction.DISPATCH_TRANSLATIONS,
});

const updateDeviceResolution: UpdateDeviceResolution = () => ({
    type: AppAction.DISPATCH_DEVICE_RESOLUTION,
    payload: {},
});

export {
    fetchTranslations,
    updateDeviceResolution,
}