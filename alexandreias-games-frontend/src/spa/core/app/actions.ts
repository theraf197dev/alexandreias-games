const fetchTranslations = (locale) => ({
    type: 'DISPATCH_TRANSLATIONS',
    payload: {
        locale,
    },
});

const updateDeviceResolution = () => ({
    type: 'DISPATCH_DEVICE_RESOLUTION',
    payload: {},
});

export {
    fetchTranslations,
    updateDeviceResolution,
}