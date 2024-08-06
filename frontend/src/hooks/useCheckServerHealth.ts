import axios from 'axios';
import { useEffect, useState } from 'react';

export type ServerHealth = 'healthy' | 'unhealthy' | 'loading';

const useCheckServerHealth = () => {
  const [health, setHealth] = useState<ServerHealth>('loading');

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API + '/health', { timeout: 10000 })
      .then(() => setHealth('healthy'))
      .catch((err) => {
        console.error(err);
        setHealth('unhealthy');
      });
  }, [setHealth, import.meta.env.VITE_API]);

  return health;
};

export default useCheckServerHealth;
