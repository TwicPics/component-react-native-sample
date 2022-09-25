import { throwError } from './utils';

export const config = {
    debug: false,
    domain: undefined,
    path: '',
    output: undefined,
    step: 20
};

const rInvalidPath = /\?/;
const rValidDomain = /(^https?:\/\/[^/]+)\/?$/;
const rValidStep = /^[1-9][0-9]*/;

export default (options) => {
    if (!options) {
        throwError(`install options not provided`);
    }
    const { domain, debug, path, step } = options;

    if (!domain || !rValidDomain.test(domain)) {
        throwError(`install domain "${domain}" is invalid`);
    }

    if (path) {
        if (rInvalidPath.test(path)) {
            throwError(`install path "${path}" is invalid`);
        }
        config.path = path.replace(/^\/?(.+?)\/?$/, `$1/`);
    }

    if (step) {
        if (!rValidStep.test(step)) {
            throwError(`install step "${step}" is invalid`);
        }
        config.step = step;
    }

    config.debug = debug;
    config.domain = domain.replace(rValidDomain, `$1`);
};
