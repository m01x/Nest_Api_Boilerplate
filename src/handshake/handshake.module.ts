import { Module } from '@nestjs/common';
import { HandshakeService } from './handshake.service';
import { HandshakeController } from './handshake.controller';

@Module({
  controllers: [HandshakeController],
  providers: [HandshakeService],
})
export class HandshakeModule {}
