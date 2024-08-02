import { ConnectedSocket, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: (request, callback) => {
      const configService = new ConfigService();
      const allowedOrigin = configService.get<string>('CORS_ALLOW_ORIGIN');
      callback(null, allowedOrigin);
    },
  },
})
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  private onlineUsers = 0;

  @SubscribeMessage('user-connect')
  handleUserConnect(@ConnectedSocket() client: Socket) {
    this.onlineUsers++;
    this.server.emit('online-count', this.onlineUsers);

    client.on('disconnect', () => {
      this.onlineUsers--;
      this.server.emit('online-count', this.onlineUsers);
    });
  }

  getOnlineUsers(): number {
    return this.onlineUsers;
  }
}
