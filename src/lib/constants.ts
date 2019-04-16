import * as React from 'react';

export const REACT_VERSION = React.version;

export const SOME_ENV_VARIABLE: string =
    process.env.SOME_ENV_VARIABLE || 'default-env-value';

export default {
    SOME_ENV_VARIABLE
};
