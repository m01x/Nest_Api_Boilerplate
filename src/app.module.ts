import { Module } from '@nestjs/common';
import { HandshakeModule } from './handshake/handshake.module';

@Module({
  imports: [ HandshakeModule ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log(`Nest Up!⚡, PORT: ${process.env.DB_PORT??`⚠️ No se especificó puerto en .env!`}.`);
  }
}
