import { getRepository, Like } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { NotificationEntity } from '../entities/notification.entity';

export class NotificationService {
    public static async getAllNotifications(): Promise<NotificationEntity[]> {
        return await getRepository(NotificationEntity).find();
    }

    public static async getUnreadNotifications(): Promise<NotificationEntity[]> {
        return await getRepository(NotificationEntity).find({ where: { read: false } });
    }

    public static async getUnreadNotificationsCount(): Promise<number> {
        return await getRepository(NotificationEntity).count({ where: { read: false } });
    }

    public static async getReadNotifications(): Promise<NotificationEntity[]> {
        return await getRepository(NotificationEntity).find({ where: { read: true } });
    }

    public static async getReadNotificationsCount(): Promise<number> {
        return await getRepository(NotificationEntity).count({ where: { read: true } });
    }

    public static async markNotificationAsRead(id: string): Promise<NotificationEntity | undefined> {
        const notificationRepo = getRepository(NotificationEntity);
        const notification = await notificationRepo.findOne({ where: { id } });
        if (!notification) {
            return undefined;
        }
        notification.read = true;
        await notificationRepo.save(notification);
        return notification;
    }

    public static async markNotificationAsUnread(id: string): Promise<NotificationEntity | undefined> {
        const notificationRepo = getRepository(NotificationEntity);
        const notification = await notificationRepo.findOne({ where: { id } });
        if (!notification) {
            return undefined;
        }
        notification.read = false;
        await notificationRepo.save(notification);
        return notification;
    }

    public static async getNotificationById(id: string): Promise<NotificationEntity | null> {
        const notification = await getRepository(NotificationEntity).findOne({
            where: {
                id,
            },
            relations: {
                user: true,
            },
        });
        return notification || null;
    }

    public static async createNotification(notification: NotificationEntity): Promise<NotificationEntity> {
        notification.id = uuidv4();
        return await getRepository(NotificationEntity).save(notification);
    }

    public static async updateNotification(id: string, notification: NotificationEntity): Promise<NotificationEntity | undefined> {
        const notificationRepo = getRepository(NotificationEntity);
        const existingNotification = await notificationRepo.findOne({ where: { id } });
        if (!existingNotification) {
            return undefined;
        }
        notification.id = id;
        return await notificationRepo.save(notification);
    }

    public static async deleteNotification(id: string): Promise<boolean> {
        const notificationRepo = getRepository(NotificationEntity);
        const existingNotification = await notificationRepo.findOne({ where: { id } });
        if (!existingNotification) {
            return false;
        }
        await notificationRepo.remove(existingNotification);
        return true;
    }

    public static async getNotificationsByUserId(userId: string): Promise<NotificationEntity[]> {
        return await getRepository(NotificationEntity)
            .createQueryBuilder('notification')
            .innerJoinAndSelect('notification.user', 'user')
            .where('user.id = :id', { id: userId })
            .getMany();
    }

    public static async searchNotifications(query: string): Promise<NotificationEntity[]> {
        return await getRepository(NotificationEntity).find({ where: { message: Like(`%${query}%`) } });
    }
}
