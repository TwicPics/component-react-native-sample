import { config } from './install';
import { regExpFinderFactory, trimRegExpFactory } from './utils';
import { rValidMode, rValidRatio } from './validate';

const isPositiveNumber = (value) => !isNaN(value) && value > 0;
const trimOrUndefined = regExpFinderFactory(trimRegExpFactory(`.+?`));
const trimTransformOrUndefined = trimRegExpFactory(`.+?`, `[\\s\\/]`);

export const parseAlt = trimOrUndefined;

const rAnchor = /\b(?:(left|right)|(bottom|top))\b/g;
export const parseAnchor = (anchor) => {
    const trimmed = trimOrUndefined(anchor);
    let x;
    let y;
    if (trimmed) {
        let tmp;
        while ((tmp = rAnchor.exec(trimmed))) {
            if (tmp[1]) {
                x = tmp[1];
            } else {
                y = tmp[2];
            }
        }
    }
    return {
        x,
        y
    };
};
export const parseFocus = trimOrUndefined;
export const parseMode = regExpFinderFactory(rValidMode);
export const parsePreTransform = regExpFinderFactory(trimTransformOrUndefined, (p) => p && `${p}/`);
export const parseRatio = (value = 1) => {
    if (value === `none`) {
        return undefined;
    }
    let number;
    if (typeof value === `number`) {
        number = value;
    } else if (value) {
        const parsed = rValidRatio.exec(value);
        if (parsed) {
            const [, , width, height] = parsed;
            number = (height ? Number(height) : 1) / Number(width);
        } else {
            number = 1;
        }
    }
    return isPositiveNumber(number) ? number : undefined;
};

const rImage = /^(image:)?\/*/;
export const parseSrc = (value) => {
    value = trimOrUndefined(value);
    return value ? value.replace(rImage, `image:${config.path}`) : `placeholder:red`;
};

export const parseStep = (value) => {
    if (typeof value !== `number`) {
        const trimmed = trimOrUndefined(value);
        // eslint-disable-next-line no-param-reassign
        value = trimmed && Number(trimmed);
    }
    return isPositiveNumber(value) ? value : undefined;
};
