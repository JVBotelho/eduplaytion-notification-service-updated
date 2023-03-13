"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsRouter = void 0;
const express_1 = require("express");
const notifications_controller_1 = require("../../controllers/notifications/notifications.controller");
class NotificationsRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.get('/', notifications_controller_1.NotificationsController.getNotifications);
        this.router.get('/unread', notifications_controller_1.NotificationsController.getUnreadNotifications);
        this.router.get('/unread/count', notifications_controller_1.NotificationsController.getUnreadNotificationsCount);
        this.router.get('/read', notifications_controller_1.NotificationsController.getReadNotifications);
        this.router.get('/read/count', notifications_controller_1.NotificationsController.getReadNotificationsCount);
        this.router.put('/:id/mark-as-read', notifications_controller_1.NotificationsController.markNotificationAsRead);
        this.router.put('/:id/mark-as-unread', notifications_controller_1.NotificationsController.markNotificationAsUnread);
        this.router.get('/:id', notifications_controller_1.NotificationsController.getNotificationById);
        this.router.post('/', notifications_controller_1.NotificationsController.createNotification);
        this.router.put('/:id', notifications_controller_1.NotificationsController.updateNotification);
        this.router.delete('/:id', notifications_controller_1.NotificationsController.deleteNotification);
        this.router.get('/user/:userId', notifications_controller_1.NotificationsController.getNotificationsByUserId);
    }
}
exports.NotificationsRouter = NotificationsRouter;
