import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import {v4 as uuidv4} from 'uuid';

@Entity()
export class NotificationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;

    @Column({ default: false })
    read: boolean;

    @ManyToOne(() => UserEntity, user => user.notifications)
    user: UserEntity;

    constructor(message: string, read: boolean, user: UserEntity) {
        this.id = uuidv4();
        this.message = message;
        this.read = read;
        this.user = user;
    }
}
