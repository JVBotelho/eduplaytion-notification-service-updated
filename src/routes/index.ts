import { Router } from 'express';
import { notificationsRouter } from './notifications/notifications.routes';

const router = Router();

router.use('/notifications', notificationsRouter);

export { router as routes };
