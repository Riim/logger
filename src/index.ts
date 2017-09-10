let global = Function('return this;')();

function noop() {}

export type THandler = (type: string, ...msg: Array<any>) => void;

let defaultHandler: THandler = (type, ...msg) => {
	let console = global.console;

	(console && console[type] || noop).call(
		console || null,
		(type == 'error' ? msg.map((m) => m === Object(m) && m.stack || m) : msg).join(' ')
	);
};

export class Logger {
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

export let logger = new Logger();

export let log: (...msg: Array<any>) => void = logger.log.bind(logger);
export let warn: (...msg: Array<any>) => void = logger.warn.bind(logger);
export let error: (...msg: Array<any>) => void = logger.error.bind(logger);
