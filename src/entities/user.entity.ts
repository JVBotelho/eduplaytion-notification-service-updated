import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { NotificationEntity } from './notification.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuidv4();

    @Column()
    name: string = '';

    @OneToMany(() => NotificationEntity, notification => notification.user)
    notifications!: NotificationEntity[];
}
