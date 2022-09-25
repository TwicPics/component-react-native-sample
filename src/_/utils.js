const buildErrorMessage = (message) => `twicpics-react-native-components ${message}`;

export const regExpFinderFactory =
    (regExp, filter = undefined) =>
    (value) => {
        let found;
        if (value) {
            `${value}`.replace(regExp, (_, v) => (found = v));
        }
        return filter ? filter(found) : found;
    };

export const throwError = (message) => {
    throw new Error(buildErrorMessage(message));
};

export const trimRegExpFactory = (items, border = `\\s`) =>
    new RegExp(`^(?:${border})*(${Array.isArray(items) ? items.join(`|`) : items})(?:${border})*$`);
