"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_entity_1 = require("./src/entities/notification.entity");
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [notification_entity_1.NotificationEntity, user_entity_1.UserEntity],
    synchronize: true,
};
exports.default = config;
