import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSubscriberEntity } from '../../entities/subscriber.entity';
import { NewSubscriberDto } from './dto/create-subscriber.dto';

@Injectable()
export class UserSubscriberService {

  constructor(
    @InjectRepository(UserSubscriberEntity)
      private readonly subscriberRepository:Repository<UserSubscriberEntity>
  
  
  ){}

  getData(): { message: string } {
    return { message: 'Nestjs has been connected' };
  }

  getAllSubcriber(){
    return this.subscriberRepository.find();
  }

  createSubscriber(newSubDto:NewSubscriberDto){
    return this.subscriberRepository.save(newSubDto);
  }

  

}
