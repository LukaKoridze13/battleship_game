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

  private onlineUsers:string[] = [];

  @SubscribeMessage('user-connect')
  handleUserConnect(@ConnectedSocket() client: Socket) {
    if(!this.onlineUsers.includes(client.id)) this.onlineUsers.push(client.id)
    this.server.emit('online-count', this.onlineUsers.length);

    client.on('disconnect', () => {
      this.onlineUsers = this.onlineUsers.filter(id=> id !== client.id)
      this.server.emit('online-count', this.onlineUsers.length);
    });
  }

  getOnlineUsers(): number {
    return this.onlineUsers.length;
  }
}
