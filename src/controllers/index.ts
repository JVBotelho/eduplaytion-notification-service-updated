import express from 'express';
import {NotificationsController} from "./notifications/notifications.controller";

const app = express();

app.use(express.json());

app.get('/notifications', NotificationsController.getNotifications);
app.get('/notifications/unread', NotificationsController.getUnreadNotifications);
app.get('/notifications/unread/count', NotificationsController.getUnreadNotificationsCount);
app.get('/notifications/read', NotificationsController.getReadNotifications);
app.get('/notifications/read/count', NotificationsController.getReadNotificationsCount);
app.get('/notifications/:id', NotificationsController.getNotificationById);
app.post('/notifications', NotificationsController.createNotification);
app.put('/notifications/:id', NotificationsController.updateNotification);
app.delete('/notifications/:id', NotificationsController.deleteNotification);
app.get('/users/:userId/notifications', NotificationsController.getNotificationsByUserId);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
