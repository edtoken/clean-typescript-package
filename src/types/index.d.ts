interface ContextInterface {
    readonly ready: boolean;
    readonly error: boolean;
    readonly value: number;
    readonly message: string;
    readonly REACT_VERSION: string;
    readonly SOME_ENV_VARIABLE: string;
}

interface ConsumerProps {
    readonly someConsumerProperty: string;
}
