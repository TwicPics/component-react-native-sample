import { PixelRatio, Platform, StyleSheet } from 'react-native';
import { config } from './install';
const output = undefined;
const VERSION = `v1`;

const actualWidth = (w, _step) => {
    const step = _step || config.step;
    return Math.max(step, step * Math.floor(w / step));
};

const actualSize = (size, step) => {
    const pixelRatio = Math.min(Math.max(1, PixelRatio.get()), 2);
    const _actualWidth = actualWidth(size.width, step) * pixelRatio;
    console.log('size and pixelRatio', size, pixelRatio);
    let _actualHeight = size.ratio ? _actualWidth * size.ratio : size.height * pixelRatio;
    console.log('_actual', _actualWidth, _actualHeight);
    return {
        w: Math.round(_actualWidth),
        h: Math.round(_actualHeight)
    };
};

const rAlt = /\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/;
export const computeAlt = (alt, src) => {
    if (!alt) {
        const tmp = rAlt.exec(src);
        alt = (tmp && tmp[1]) || `image`;
    }
    return alt;
};

const computePosition = (mode, position) => mode === `contain` && position;

const computePreTransform = ({ x, y }, focus, mode, preTransform = ``) => {
    const actualFocus = mode !== `contain` && (focus || (y ? (x ? `${y}-${x}` : y) : x));
    return `${preTransform || ``}${actualFocus ? `focus=${actualFocus}/` : ``}`;
};

export const computeSize = (width, height, ratio) => {
    return {
        height: ratio ? width * ratio : height,
        ratio,
        width
    };
};

const rNoCatchAll = /^v[0-9]+(?:\/|$)|^(rel:)/;
const rPath = /^(?:image:)?(\/*)(.*)$/;
const rQuery = /\?/;
export const computeSrc = (anchor, focus, mode = `cover`, preTransform = ``, size, src, step) => {
    const { w, h } = actualSize(size, step);
    const [, , path] = rPath.exec(src);
    const noCatchAll = rNoCatchAll.exec(path);
    const noQuery = !rQuery.test(path);

    const { debug, domain } = config;
    const transform = `${computePreTransform(anchor, focus, mode, preTransform)}${mode}=${w}x${h}`;
    const actualOutput = output ? `/output=${output}` : ``;
    const actualDebug = debug && Platform.OS === 'web' ? `/debug` : ``;

    return noCatchAll
        ? `${domain}/${VERSION}${actualDebug}/${transform}${actualOutput}/${
              noCatchAll[1] ? `` : `image:`
          }${path}`
        : `${domain}/${path}${
              noQuery ? `?` : `&`
          }twic=${VERSION}${actualDebug}/${transform}${actualOutput}`;
};

export const computeStyle = (value, ratio) => {
    if (ratio && value) {
        let tmp = value;
        if (Array.isArray(value)) {
            tmp = value.reduce((p, c) => {
                return { ...p, ...c };
            }, {});
        }
        tmp = JSON.parse(JSON.stringify(tmp));
        tmp.height = undefined;
        return tmp;
    }
    return value;
};

export const computeWrapperStyle = (size, styles) => {
    return StyleSheet.flatten([
        styles.wrapper,
        {
            height: size.height
        }
    ]);
};
