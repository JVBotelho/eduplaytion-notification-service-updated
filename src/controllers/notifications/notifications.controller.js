"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
const notification_service_1 = require("../../services/notification.service");
class NotificationsController {
    static getNotifications(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notifications = yield notification_service_1.NotificationService.getAllNotifications();
                res.json(notifications);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getUnreadNotifications(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notifications = yield notification_service_1.NotificationService.getUnreadNotifications();
                res.json(notifications);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getUnreadNotificationsCount(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield notification_service_1.NotificationService.getUnreadNotificationsCount();
                res.json(count);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getReadNotifications(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notifications = yield notification_service_1.NotificationService.getReadNotifications();
                res.json(notifications);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getReadNotificationsCount(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield notification_service_1.NotificationService.getReadNotificationsCount();
                res.json(count);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static markNotificationAsRead(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const notification = yield notification_service_1.NotificationService.markNotificationAsRead(id);
                if (!notification) {
                    res.status(404).send('Notification not found');
                    return;
                }
                res.status(200).send('Notification marked as read');
            }
            catch (error) {
                next(error);
            }
        });
    }
    static markNotificationAsUnread(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const notification = yield notification_service_1.NotificationService.markNotificationAsUnread(id);
                if (!notification) {
                    res.status(404).send('Notification not found');
                    return;
                }
                res.status(200).send('Notification marked as unread');
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getNotificationById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const notification = yield notification_service_1.NotificationService.getNotificationById(id);
                if (!notification) {
                    res.status(404).send('Notification not found');
                    return;
                }
                res.json(notification);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static createNotification(request, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNotification = request.body;
                const savedNotification = yield notification_service_1.NotificationService.createNotification(newNotification);
                res.status(201).json(savedNotification);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static updateNotification(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedNotification = req.body;
                const notification = yield notification_service_1.NotificationService.updateNotification(id, updatedNotification);
                if (!notification) {
                    res.status(404).send('Notification not found');
                    return;
                }
                res.json(notification);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static deleteNotification(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const notification = yield notification_service_1.NotificationService.deleteNotification(id);
                if (!notification) {
                    res.status(404).send('Notification not found');
                    return;
                }
                res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getNotificationsByUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                const notifications = yield notification_service_1.NotificationService.getNotificationsByUserId(userId);
                res.json(notifications);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.NotificationsController = NotificationsController;
