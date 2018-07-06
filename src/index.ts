function noop() {}

export type THandler = (type: string, ...msg: Array<any>) => void;

const defaultHandler: THandler = (type, ...msg) => {
	((console as any)[type] || noop).apply(
		console,
		type == 'error' ? msg.map((m: any) => (m && typeof m == 'object' && m.stack) || m) : msg
	);
};

export class Logger {
	static $instance: Logger;

	handler: THandler;

	constructor(handler?: THandler) {
		this.handler = handler || defaultHandler;
	}

	log(...msg: Array<any>) {
		this.handler('log', ...msg);
	}

	warn(...msg: Array<any>) {
		this.handler('warn', ...msg);
	}

	error(...msg: Array<any>) {
		this.handler('error', ...msg);
	}
}

export const logger = (Logger.$instance = new Logger());

export const log: (...msg: Array<any>) => void = logger.log.bind(logger);
export const warn: (...msg: Array<any>) => void = logger.warn.bind(logger);
export const error: (...msg: Array<any>) => void = logger.error.bind(logger);
