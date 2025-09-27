import { PartialType } from '@nestjs/mapped-types';
import { CreateHandshakeDto } from './create-handshake.dto';

export class UpdateHandshakeDto extends PartialType(CreateHandshakeDto) {}
