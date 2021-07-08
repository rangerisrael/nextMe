// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';

// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//   await app.listen(port, () => {
//     Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }

// bootstrap();



/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { SwaggerConfig } from './app/config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  const config: ConfigService = app.get(ConfigService);

  const globalPrefix = config.get<string>('prefix');
  app.setGlobalPrefix(globalPrefix);
  app.enableCors(); // TODO update with proper endpoints

  if (process.env.NODE_ENV === 'development') {
    const swaggerConf: SwaggerConfig = config.get<SwaggerConfig>('swagger');
    SwaggerModule.setup(
      globalPrefix,
      app,
      SwaggerModule.createDocument(
        app,
        new DocumentBuilder()
          .setTitle(swaggerConf.title)
          .setDescription(swaggerConf.description)
          .build()
      )
    );
  }

  const port = config.get<number>('port');
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
