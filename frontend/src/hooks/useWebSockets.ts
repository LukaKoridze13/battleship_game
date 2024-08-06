import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export type SocketHealth = 'healthy' | 'unhealthy' | 'disconnected' | 'loading';

const useWebSockets = () => {
  const [health, setHealth] = useState<SocketHealth>('loading');
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const socket: Socket = io(import.meta.env.VITE_API as string);

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('user-connect');
      setHealth('healthy');
    });

    socket.on('disconnect', () => setHealth('disconnected'));

    socket.on('online-count', (count: number) => setOnlineUsers(count));

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('online-count');
    };
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (health === 'loading') {
      timeout = setTimeout(() => {
        setHealth('unhealthy');
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [health]);

  return { socket, health, onlineUsers };
};

export default useWebSockets;
