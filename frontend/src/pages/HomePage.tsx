import FullPage from '../components/containers/FullPage';
import OnlineUsers from '../components/simple/OnlineUsers';

const HomePage = () => {
  return (
    <FullPage>
      <header>
        <OnlineUsers />
      </header>
    </FullPage>
  );
};

export default HomePage;
