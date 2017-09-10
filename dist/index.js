"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global = Function('return this;')();
function noop() { }
exports.logger = {
    _handler: function (type) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        var console = global.console;
        (console && console[type] || noop).call(console || null, (type == 'error' ? msg.map(function (m) { return m === Object(m) && m.stack || m; }) : msg).join(' '));
    },
    setHandler: function (handler) {
        exports.logger._handler = handler;
    },
    log: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        exports.logger._handler.apply(exports.logger, ['log'].concat(msg));
    },
    warn: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        exports.logger._handler.apply(exports.logger, ['warn'].concat(msg));
    },
    error: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        exports.logger._handler.apply(exports.logger, ['error'].concat(msg));
    }
};
exports.log = exports.logger.log;
exports.warn = exports.logger.warn;
exports.error = exports.logger.error;
