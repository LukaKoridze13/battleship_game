import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { OnlineController } from 'src/online/online.controller';

@Module({
  providers: [SocketGateway],
  controllers:[OnlineController]
})
export class SocketModule {}
