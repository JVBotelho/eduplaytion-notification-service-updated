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
exports.NotificationService = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const notification_entity_1 = require("../entities/notification.entity");
class NotificationService {
    static getAllNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).find();
        });
    }
    static getUnreadNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).find({ where: { read: false } });
        });
    }
    static getUnreadNotificationsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).count({ where: { read: false } });
        });
    }
    static getReadNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).find({ where: { read: true } });
        });
    }
    static getReadNotificationsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).count({ where: { read: true } });
        });
    }
    static markNotificationAsRead(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificationRepo = (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity);
            const notification = yield notificationRepo.findOne({ where: { id } });
            if (!notification) {
                return undefined;
            }
            notification.read = true;
            yield notificationRepo.save(notification);
            return notification;
        });
    }
    static markNotificationAsUnread(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificationRepo = (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity);
            const notification = yield notificationRepo.findOne({ where: { id } });
            if (!notification) {
                return undefined;
            }
            notification.read = false;
            yield notificationRepo.save(notification);
            return notification;
        });
    }
    static getNotificationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const notification = yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).findOne({
                where: {
                    id,
                },
                relations: {
                    user: true,
                },
            });
            return notification || null;
        });
    }
    static createNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            notification.id = (0, uuid_1.v4)();
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).save(notification);
        });
    }
    static updateNotification(id, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificationRepo = (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity);
            const existingNotification = yield notificationRepo.findOne({ where: { id } });
            if (!existingNotification) {
                return undefined;
            }
            notification.id = id;
            return yield notificationRepo.save(notification);
        });
    }
    static deleteNotification(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificationRepo = (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity);
            const existingNotification = yield notificationRepo.findOne({ where: { id } });
            if (!existingNotification) {
                return false;
            }
            yield notificationRepo.remove(existingNotification);
            return true;
        });
    }
    static getNotificationsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity)
                .createQueryBuilder('notification')
                .innerJoinAndSelect('notification.user', 'user')
                .where('user.id = :id', { id: userId })
                .getMany();
        });
    }
    static searchNotifications(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getRepository)(notification_entity_1.NotificationEntity).find({ where: { message: (0, typeorm_1.Like)(`%${query}%`) } });
        });
    }
}
exports.NotificationService = NotificationService;
