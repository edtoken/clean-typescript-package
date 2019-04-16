import * as React from 'react';
import { Consumer } from './context';

export default function withCleanTypeScriptPackage<
    OriginalProps extends object
>(WrappedComponent: React.ComponentType<OriginalProps & ConsumerProps>) {
    return class extends React.Component<OriginalProps & ConsumerProps, {}> {
        static readonly displayName = `withCleanTypeScriptPackage${name}(${WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component'})`;

        render() {
            return (
                <Consumer>
                    {(data: ContextInterface) => {
                        return (
                            <WrappedComponent {...{ ...this.props, ...data }} />
                        );
                    }}
                </Consumer>
            );
        }
    };
}
