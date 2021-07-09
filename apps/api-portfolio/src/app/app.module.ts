import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubscriberModule } from './api/subscriber/subcriber.module';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    DatabaseModule,
    SubscriberModule 
     
  ],

})
export class AppModule {}
