import { Socket } from 'socket.io-client';
import { create } from 'zustand';

export type SocketHealth = 'healthy' | 'unhealthy' | 'disconnected' | 'loading';

interface SocketState {
  socket: Socket | null;
  onlineUsers: number;
  health: SocketHealth;
  setSocket: (socket: Socket) => void;
  setOnlineUsers: (count: number) => void;
  setHealth: (health: SocketHealth) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,
  onlineUsers: 0,
  health: 'loading',
  setSocket: (socket) => set({ socket }),
  setOnlineUsers: (count) => set({ onlineUsers: count }),
  setHealth: (health) => set({ health }),
}));
