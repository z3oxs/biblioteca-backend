import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message,
        });

    }

    return res.status(500).json({
        message: 'Unknown server error was occurred.',
    });
}
