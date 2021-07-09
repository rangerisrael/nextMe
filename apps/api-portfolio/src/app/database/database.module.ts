import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import { DatabaseConfig } from '../config/configuration';
import { UserSubscriberEntity } from '../entities/subscriber.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        const db: DatabaseConfig = config.get<DatabaseConfig>('database');
        return {
          type: db.type,
          host: db.host,
          port: db.port,
          username: db.user,
          password: db.password,
          database: db.name,
          entities: [UserSubscriberEntity],
          synchronize: true,
        };
        },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
