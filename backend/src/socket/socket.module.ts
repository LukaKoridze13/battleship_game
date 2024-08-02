import { Module } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';
import { SocketService } from './socket/socket.service';
import { SocketController } from './socket.controller';

@Module({
  providers: [SocketGateway, SocketService],
  controllers: [SocketController],
})
export class SocketModule {}
