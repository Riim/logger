"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global = Function('return this;')();
function noop() { }
var defaultHandler = function (type) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    var console = global.console;
    (console && console[type] || noop).call(console || null, (type == 'error' ? msg.map(function (m) { return m === Object(m) && m.stack || m; }) : msg).join(' '));
};
var Logger = /** @class */ (function () {
    function Logger(handler) {
        this.handler = handler || defaultHandler;
    }
    Logger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['log'].concat(msg));
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['warn'].concat(msg));
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['error'].concat(msg));
    };
    return Logger;
}());
exports.Logger = Logger;
exports.logger = new Logger();
exports.log = exports.logger.log.bind(exports.logger);
exports.warn = exports.logger.warn.bind(exports.logger);
exports.error = exports.logger.error.bind(exports.logger);
