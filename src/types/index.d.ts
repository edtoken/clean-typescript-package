interface ContextInterface {
    readonly ready: boolean;
    readonly error: boolean;
    readonly value: number;
    readonly message: string;
    readonly someEnvValue: string;
}

interface ConsumerProps {
    readonly someConsumerProperty: string;
}
