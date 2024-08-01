import axios from 'axios';
import { useEffect, useState } from 'react';
import { VARIABLES } from '../environment/VARIABLES';

export type ServerHealth = 'healthy' | 'unhealthy' | 'loading';

const useCheckServerHealth = () => {
  const [health, setHealth] = useState<ServerHealth>('loading');

  useEffect(() => {
    axios
      .get(VARIABLES.API + '/health')
      .then(() => setHealth('healthy'))
      .catch((err) => {
        console.error(err);
        setHealth('unhealthy');
      });
  }, [setHealth, VARIABLES.API]);

  return health;
};

export default useCheckServerHealth;
