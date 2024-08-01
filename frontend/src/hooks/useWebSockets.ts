import { useEffect, useState } from 'react';
import { VARIABLES } from '../environment/VARIABLES';
import { io, Socket } from 'socket.io-client';
import axios from 'axios';

export type SocketHealth = 'healthy' | 'unhealthy' | 'loading';

const useWebSockets = () => {
  const [health, setHealth] = useState<SocketHealth>('loading');
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const socket: Socket = io(VARIABLES.API);

  useEffect(() => {
    socket.on('connect', () => {
      setHealth('healthy');
      axios.get(`${VARIABLES.API}/socket`).then((res) => {
        setOnlineUsers(res.data);
      });
    });
    socket.on('disconnect', () => setHealth('unhealthy'));
  }, [setHealth]);

  return { socket, health, onlineUsers };
};

export default useWebSockets;
