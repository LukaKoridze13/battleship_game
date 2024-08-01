import useCheckServerHealth from './hooks/useCheckServerHealth';
import useWebSockets from './hooks/useWebSockets';

const App = () => {
  const serverHealth = useCheckServerHealth();
  const {health:socketHealth, onlineUsers} = useWebSockets();
  return <div>Server Health: {serverHealth}, Socket Health: {socketHealth}, Online Users: {onlineUsers}</div>;
};

export default App;
