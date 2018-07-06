export declare type THandler = (type: string, ...msg: Array<any>) => void;
export declare class Logger {
    static $instance: Logger;
    handler: THandler;
    constructor(handler?: THandler);
    log(...msg: Array<any>): void;
    warn(...msg: Array<any>): void;
    error(...msg: Array<any>): void;
}
export declare const logger: Logger;
export declare const log: (...msg: Array<any>) => void;
export declare const warn: (...msg: Array<any>) => void;
export declare const error: (...msg: Array<any>) => void;
