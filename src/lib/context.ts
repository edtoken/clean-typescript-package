import * as React from 'react';

const { Provider, Consumer } = React.createContext<ContextInterface>({
    error: false,
    message: '',
    ready: false,
    someEnvValue: '',
    value: 0
});

export { Provider, Consumer };
