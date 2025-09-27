import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //*Agregaremos el prefijo '/api/' por convención
  app.setGlobalPrefix('api');

  //*Agregamos la configuracion de Swagger (27-09-2025)
  const config = new DocumentBuilder()
    .setTitle('Nest API RESTfull - Boilerplate')
    .setDescription('API lista para ser integrada con Express, Swagger, TypeORM. Espero sea de tu utilidad y gracias por utilizarla 🙃🌱')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, { useGlobalPrefix: true });

    //Agregamos el , useGlobalPipes y ValidationPipe para activar las validaciones en nuestros DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
