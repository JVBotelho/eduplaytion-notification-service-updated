import { Request, Response, NextFunction } from 'express';
import {NotificationService} from "../../services/notification.service";
import {NotificationEntity} from "../../entities/notification.entity";

export class NotificationsController {

    public static async getNotifications(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const notifications = await NotificationService.getAllNotifications();
            res.json(notifications);
        } catch (error) {
            next(error);
        }
    }

    public static async getUnreadNotifications(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const notifications = await NotificationService.getUnreadNotifications();
            res.json(notifications);
        } catch (error) {
            next(error);
        }
    }

    public static async getUnreadNotificationsCount(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const count = await NotificationService.getUnreadNotificationsCount();
            res.json(count);
        } catch (error) {
            next(error);
        }
    }

    public static async getReadNotifications(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const notifications = await NotificationService.getReadNotifications();
            res.json(notifications);
        } catch (error) {
            next(error);
        }
    }

    public static async getReadNotificationsCount(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const count = await NotificationService.getReadNotificationsCount();
            res.json(count);
        } catch (error) {
            next(error);
        }
    }

    public static async markNotificationAsRead(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const notification = await NotificationService.markNotificationAsRead(id);
            if (!notification) {
                res.status(404).send('Notification not found');
                return;
            }
            res.status(200).send('Notification marked as read');
        } catch (error) {
            next(error);
        }
    }

    public static async markNotificationAsUnread(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const notification = await NotificationService.markNotificationAsUnread(id);
            if (!notification) {
                res.status(404).send('Notification not found');
                return;
            }
            res.status(200).send('Notification marked as unread');
        } catch (error) {
            next(error);
        }
    }

    public static async getNotificationById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const notification = await NotificationService.getNotificationById(id);
            if (!notification) {
                res.status(404).send('Notification not found');
                return;
            }
            res.json(notification);
        } catch (error) {
            next(error);
        }
    }

    public static async createNotification(request: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const newNotification: NotificationEntity = request.body;
            const savedNotification = await NotificationService.createNotification(newNotification);
            res.status(201).json(savedNotification);
        } catch (error) {
            next(error);
        }
    }

    public static async updateNotification(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const updatedNotification: NotificationEntity = req.body;
            const notification = await NotificationService.updateNotification(id, updatedNotification);
            if (!notification) {
                res.status(404).send('Notification not found');
                return;
            }
            res.json(notification);
        } catch (error) {
            next(error);
        }
    }

    public static async deleteNotification(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const notification = await NotificationService.deleteNotification(id);
            if (!notification) {
                res.status(404).send('Notification not found');
                return;
            }
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }

    public static async getNotificationsByUserId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId = req.params.userId;
            const notifications = await NotificationService.getNotificationsByUserId(userId);
            res.json(notifications);
        } catch (error) {
            next(error);
        }
    }
}
