export declare let logger: {
    _handler: (type: string, ...msg: any[]) => void;
    setHandler(handler: (type: string, ...msg: any[]) => void): void;
    log(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
};
export declare let log: (...msg: any[]) => void;
export declare let warn: (...msg: any[]) => void;
export declare let error: (...msg: any[]) => void;
