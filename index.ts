import express, {ErrorRequestHandler} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import { config } from './config';
import {NotificationsRouter} from "./src/routes/notifications/notifications.routes";
import {NotificationService} from "./src/services/notification.service";
import {ErrorHandlerMiddleware} from "./src/middleware/error-handler.middleware";

// create express app
const app = express();

// set up middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// set up routes
app.use('/notifications', new NotificationsRouter().router);

// set up error handling middleware
app.use(ErrorHandlerMiddleware.handle as ErrorRequestHandler);

// start the server
createConnection(config)
    .then(() => {
        console.log('Connected to database');
        app.use('/notifications', new NotificationsRouter(NotificationService).router);
        app.use(ErrorHandlerMiddleware);
        app.listen(config.PORT, () => {
            console.log(`Server started on port ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });

export default app;
