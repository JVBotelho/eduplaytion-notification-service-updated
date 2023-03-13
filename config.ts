import dotenv from 'dotenv';

dotenv.config();

export const config = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: parseInt(process.env.PORT || '3000', 10),
    JWT_SECRET: process.env.JWT_SECRET,
    database: process.env.DATABASE_URL || {
        entities: ['src/entities/*.ts'],
        synchronize: true,
    },
    load: () => {
        if (!config.DB_HOST) {
            throw new Error('DB_HOST not set in environment variables');
        }
        if (!config.DB_NAME) {
            throw new Error('DB_NAME not set in environment variables');
        }
        if (!config.DB_USERNAME) {
            throw new Error('DB_USERNAME not set in environment variables');
        }
        if (!config.DB_PASSWORD) {
            throw new Error('DB_PASSWORD not set in environment variables');
        }
        if (!config.JWT_SECRET) {
            throw new Error('JWT_SECRET not set in environment variables');
        }
    },
};

config.load();
