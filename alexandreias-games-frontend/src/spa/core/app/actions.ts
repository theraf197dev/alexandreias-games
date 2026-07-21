const getTranslations = (locale) => ({
    type: 'DISPATCH_TRANSLATIONS',
    payload: {
        locale,
    },
});

export {
    getTranslations,
}