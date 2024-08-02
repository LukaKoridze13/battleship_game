import { Controller, Get } from '@nestjs/common';
import { SocketGateway } from 'src/socket/socket.gateway';

@Controller('online')
export class OnlineController {
  constructor(private readonly socketGateway: SocketGateway) {}

  @Get()
  getOnlineUsers() {
    const onlineUsers = this.socketGateway.getOnlineUsers();
    return onlineUsers;
  }
}
