import { useEffect, useState } from 'react';
import { VARIABLES } from '../environment/VARIABLES';
import { io, Socket } from 'socket.io-client';

export type SocketHealth = 'healthy' | 'unhealthy' | 'loading';

const useWebSockets = () => {
  const [health, setHealth] = useState<SocketHealth>('loading');
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const socket: Socket = io(VARIABLES.API);

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('user-connect');
      setHealth('healthy');
    });

    socket.on('disconnect', () => setHealth('unhealthy'));

    socket.on('online-count', (count: number) => setOnlineUsers(count));
    
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('online-count');
    };
  }, []);

  return { socket, health, onlineUsers };
};

export default useWebSockets;
