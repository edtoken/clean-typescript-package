import * as React from 'react';
import { SOME_ENV_VARIABLE } from './constants';
import { Provider } from './context';

export default class ProviderComponent extends React.Component<
    object,
    ContextInterface
> {
    static readonly defaultProps = {};

    readonly state: ContextInterface = {
        error: false,
        message: '',
        ready: false,
        someEnvValue: SOME_ENV_VARIABLE,
        value: 0
    };

    componentDidMount() {
        setTimeout(() => {
            const rand = Math.random() > 0.5;
            const success = !!rand;

            this.setState({
                error: !success,
                message: `rand-${rand}`,
                ready: success
            } as ContextInterface);
        }, 5000);
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}
