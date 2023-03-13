"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerMiddleware = void 0;
class ErrorHandlerMiddleware {
    static handle(err, req, res, next) {
        console.error(err.stack);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
