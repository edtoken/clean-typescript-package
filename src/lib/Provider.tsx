import * as React from 'react';
import { REACT_VERSION, SOME_ENV_VARIABLE } from './constants';
import { Provider } from './context';

export default class ProviderComponent extends React.Component<
    object,
    ContextInterface
> {
    static readonly defaultProps = {};

    readonly state: ContextInterface = {
        REACT_VERSION,
        SOME_ENV_VARIABLE,
        error: false,
        message: '',
        ready: false,
        value: 0
    };

    componentDidMount() {
        setTimeout(() => {
            const rand = Math.random();
            const success = !!(rand > 0.5);

            this.setState({
                error: !success,
                message: `rand-${rand}`,
                ready: success
            } as ContextInterface);
        }, 2000);
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}
