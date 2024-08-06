import { useSocketStore } from '../../zustand/SocketState';

const OnlineUsers = () => {
  const onlineUsers  = useSocketStore(state=>state.onlineUsers);
  return <div className="text-white">{onlineUsers === 1 ? <span>Just you and your thoughts!</span> : <span>{onlineUsers} players questing!</span>}</div>;
};

export default OnlineUsers;
