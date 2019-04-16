import * as React from 'react';
import { REACT_VERSION } from './constants';

const defaultContextValue: ContextInterface = {
    REACT_VERSION: '',
    SOME_ENV_VARIABLE: '',
    error: false,
    message: '',
    ready: false,
    value: 1
};

// tslint:disable:no-let
let ProvidedContext;

if (+REACT_VERSION.split('.')[0] < 16) {
    // tslint:disable:no-var-requires
    const createReactContext = require('create-react-context');
    ProvidedContext = createReactContext(defaultContextValue);
} else {
    ProvidedContext = React.createContext<ContextInterface>(
        defaultContextValue
    );
}

const Consumer = ProvidedContext.Consumer;
const Provider = ProvidedContext.Provider;

export { Consumer, Provider };
