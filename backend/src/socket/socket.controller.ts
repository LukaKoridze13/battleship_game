import { Controller, Get } from '@nestjs/common';
import { SocketService } from './socket/socket.service';

@Controller('socket')
export class SocketController {
  constructor(private readonly socketService: SocketService) {}

  @Get()
  checkUsers() {
    // Get the list of connected clients from the service
    return this.socketService.connectedClients;
  }
}
