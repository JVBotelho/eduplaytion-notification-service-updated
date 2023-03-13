"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notifications_controller_1 = require("./notifications/notifications.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/notifications', notifications_controller_1.NotificationsController.getNotifications);
app.get('/notifications/unread', notifications_controller_1.NotificationsController.getUnreadNotifications);
app.get('/notifications/unread/count', notifications_controller_1.NotificationsController.getUnreadNotificationsCount);
app.get('/notifications/read', notifications_controller_1.NotificationsController.getReadNotifications);
app.get('/notifications/read/count', notifications_controller_1.NotificationsController.getReadNotificationsCount);
app.get('/notifications/:id', notifications_controller_1.NotificationsController.getNotificationById);
app.post('/notifications', notifications_controller_1.NotificationsController.createNotification);
app.put('/notifications/:id', notifications_controller_1.NotificationsController.updateNotification);
app.delete('/notifications/:id', notifications_controller_1.NotificationsController.deleteNotification);
app.get('/users/:userId/notifications', notifications_controller_1.NotificationsController.getNotificationsByUserId);
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
