import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { config } from './config';
import { NotificationsRouter } from "./src/routes/notifications/notifications.routes";
import { ErrorHandlerMiddleware } from './src/middleware/error-handler.middleware';


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.setup();
    }

    private async setup(): Promise<void> {
        // Load environment variables
        config.load();

        // Connect to the database
        await createConnection();

        // Middleware
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(cors());

        // Routes
        this.app.use('/notifications', new NotificationsRouter().router);

        // Error handling middleware
        this.app.use(ErrorHandlerMiddleware.handleError);
    }
}

export default new App().app;
