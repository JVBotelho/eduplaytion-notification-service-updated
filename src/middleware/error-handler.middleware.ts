import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export class ErrorHandlerMiddleware {
    public static handle(err: Error, req: Request, res: Response, next: NextFunction): void {
        console.error(err.stack);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}
