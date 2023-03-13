import { ConnectionOptions } from 'typeorm';
import {NotificationEntity} from "./src/entities/notification.entity";
import {UserEntity} from "./src/entities/user.entity";

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [NotificationEntity, UserEntity],
    synchronize: true,
};

export default config;
