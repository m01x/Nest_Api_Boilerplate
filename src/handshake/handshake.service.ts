import { Injectable } from '@nestjs/common';
import { CreateHandshakeDto } from './dto/create-handshake.dto';
import { UpdateHandshakeDto } from './dto/update-handshake.dto';

@Injectable()
export class HandshakeService {
  create(createHandshakeDto: CreateHandshakeDto) {
    return 'This action adds a new handshake';
  }

  findAll() {
    return `This action returns all handshake`;
  }

  findOne(id: number) {
    return `This action returns a #${id} handshake`;
  }

  update(id: number, updateHandshakeDto: UpdateHandshakeDto) {
    return `This action updates a #${id} handshake`;
  }

  remove(id: number) {
    return `This action removes a #${id} handshake`;
  }
}
