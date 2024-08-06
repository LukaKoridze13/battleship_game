import useWebSockets from '../../hooks/useWebSockets';

const OnlineUsers = () => {
  const { onlineUsers } = useWebSockets();
  return <div className="text-white">{onlineUsers === 1 ? <span>Just you and your thoughts!</span> : <span >{onlineUsers} players questing!</span>}</div>;
};

export default OnlineUsers;
