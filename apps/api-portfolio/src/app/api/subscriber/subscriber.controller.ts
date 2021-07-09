import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewSubscriberDto } from './dto/create-subscriber.dto';
import { UserSubscriberService } from './subscriber.service';


@Controller('subscriber')
export class UserSubscriberController {
  constructor(private readonly userSubscriberService:UserSubscriberService ) {}

  @Get()
  getData() {
    return this.userSubscriberService.getData();

  }


 @Get('list')
 list(){
   return this.userSubscriberService.getAllSubcriber();
 } 

@Post('new')
  newData(@Body() newSubDto:NewSubscriberDto){
      return this.userSubscriberService.createSubscriber(newSubDto);
  }


}
