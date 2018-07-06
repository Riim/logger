"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
var defaultHandler = function (type) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    (console[type] || noop).apply(console, type == 'error' ? msg.map(function (m) { return (m && typeof m == 'object' && m.stack) || m; }) : msg);
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
exports.logger = (Logger.$instance = new Logger());
exports.log = exports.logger.log.bind(exports.logger);
exports.warn = exports.logger.warn.bind(exports.logger);
exports.error = exports.logger.error.bind(exports.logger);
