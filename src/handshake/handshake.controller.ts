import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HandshakeService } from './handshake.service';
import { CreateHandshakeDto } from './dto/create-handshake.dto';
import { UpdateHandshakeDto } from './dto/update-handshake.dto';

@Controller('handshake')
export class HandshakeController {
  constructor(private readonly handshakeService: HandshakeService) {}

  @Post()
  create(@Body() createHandshakeDto: CreateHandshakeDto) {
    return this.handshakeService.create(createHandshakeDto);
  }

  @Get()
  findAll() {
    return this.handshakeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.handshakeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHandshakeDto: UpdateHandshakeDto) {
    return this.handshakeService.update(+id, updateHandshakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handshakeService.remove(+id);
  }
}
