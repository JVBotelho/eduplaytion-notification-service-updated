import { EntityRepository, Repository } from 'typeorm';
import { NotificationEntity } from '../entities/notification.entity';

@EntityRepository(NotificationEntity)
export class NotificationRepository extends Repository<NotificationEntity> {
    // add custom repository methods here
}
