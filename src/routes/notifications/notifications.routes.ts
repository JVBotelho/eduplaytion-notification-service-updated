import { Router } from 'express';
import {NotificationsController} from "../../controllers/notifications/notifications.controller";

export class NotificationsRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', NotificationsController.getNotifications);
        this.router.get('/unread', NotificationsController.getUnreadNotifications);
        this.router.get('/unread/count', NotificationsController.getUnreadNotificationsCount);
        this.router.get('/read', NotificationsController.getReadNotifications);
        this.router.get('/read/count', NotificationsController.getReadNotificationsCount);
        this.router.put('/:id/mark-as-read', NotificationsController.markNotificationAsRead);
        this.router.put('/:id/mark-as-unread', NotificationsController.markNotificationAsUnread);
        this.router.get('/:id', NotificationsController.getNotificationById);
        this.router.post('/', NotificationsController.createNotification);
        this.router.put('/:id', NotificationsController.updateNotification);
        this.router.delete('/:id', NotificationsController.deleteNotification);
        this.router.get('/user/:userId', NotificationsController.getNotificationsByUserId);
    }
}
