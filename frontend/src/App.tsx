import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useCheckServerHealth from './hooks/useCheckServerHealth';
import DisconnectedScreen from './screens/DisconnectedScreen';
import LoadingScreen from './screens/LoadingScreen';
import NoConnectionScreen from './screens/NoConnectionScreen';
import HomePage from './pages/HomePage';
import { useSocketStore } from './zustand/SocketState';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import AuthPage from './pages/AuthPage';
import Header from './components/multi/Header';

const App = () => {
  const { setSocket, health: socketHealth, setHealth, setOnlineUsers } = useSocketStore();
  const serverHealth = useCheckServerHealth();

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_API as string);
    setSocket(newSocket);

    const handleConnect = () => {
      newSocket.emit('user-connect');
      setHealth('healthy');
    };

    const handleDisconnect = () => {
      setHealth('disconnected');
    };

    const handleOnlineCount = (count: number) => setOnlineUsers(count);

    newSocket.on('connect', handleConnect);
    newSocket.on('disconnect', handleDisconnect);
    newSocket.on('online-count', handleOnlineCount);

    return () => {
      newSocket.off('connect', handleConnect);
      newSocket.off('disconnect', handleDisconnect);
      newSocket.off('online-count', handleOnlineCount);
    };
  }, []);

  if (serverHealth === 'loading' || socketHealth === 'loading') {
    return <LoadingScreen />;
  }

  if (serverHealth === 'unhealthy' || socketHealth === 'unhealthy') {
    return <NoConnectionScreen />;
  }

  if (socketHealth === 'disconnected') {
    return <DisconnectedScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
