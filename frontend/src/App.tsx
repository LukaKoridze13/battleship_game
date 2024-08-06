import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useCheckServerHealth from './hooks/useCheckServerHealth';
import useWebSockets from './hooks/useWebSockets';
import DisconnectedScreen from './screens/DisconnectedScreen';
import LoadingScreen from './screens/LoadingScreen';
import NoConnectionScreen from './screens/NoConnectionScreen';
import HomePage from './pages/HomePage';

const App = () => {
  const serverHealth = useCheckServerHealth();
  const { health: socketHealth } = useWebSockets();

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
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
