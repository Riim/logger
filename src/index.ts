let global = Function('return this;')();

function noop() {}

export let logger = {
	_handler: (type: string, ...msg: Array<any>) => {
		let console = global.console;

		(console && console[type] || noop).call(
			console || null,
			(type == 'error' ? msg.map((m) => m === Object(m) && m.stack || m) : msg).join(' ')
		);
	},

	setHandler(handler: (type: string, ...msg: Array<any>) => void) {
		logger._handler = handler;
	},

	log(...msg: Array<any>) {
		logger._handler('log', ...msg);
	},

	warn(...msg: Array<any>) {
		logger._handler('warn', ...msg);
	},

	error(...msg: Array<any>) {
		logger._handler('error', ...msg);
	}
};

export let log = logger.log;
export let warn = logger.warn;
export let error = logger.error;
