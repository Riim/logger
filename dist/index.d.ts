export declare type THandler = (type: string, ...msg: Array<any>) => void;
export declare class Logger {
    handler: THandler;
    constructor(handler?: THandler);
    log(...msg: Array<any>): void;
    warn(...msg: Array<any>): void;
    error(...msg: Array<any>): void;
}
export declare let logger: Logger;
export declare let log: (...msg: Array<any>) => void;
export declare let warn: (...msg: Array<any>) => void;
export declare let error: (...msg: Array<any>) => void;
