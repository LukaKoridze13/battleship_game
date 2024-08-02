import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class SocketService {
  public  connectedClients:number = 0;

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients++;

    socket.on('disconnect', () => {
      this.connectedClients--;
    });

    // Handle other events and messages from the client
  }

  // Add more methods for handling events, messages, etc.
}
