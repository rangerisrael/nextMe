
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSubscriberEntity } from '../../entities/subscriber.entity';
import { UserSubscriberController } from './subscriber.controller';
import { UserSubscriberService } from './subscriber.service';


@Module({
  imports: [
      TypeOrmModule.forFeature([UserSubscriberEntity])
  ],
  controllers: [UserSubscriberController],
  providers: [UserSubscriberService],
})
export class SubscriberModule {}
