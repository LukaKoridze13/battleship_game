import { useNavigate } from 'react-router-dom';
import { useUserState } from '../../zustand/UserState';

const HeaderUser = () => {
  const user = useUserState((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth?type=login');
  };

  const handleRegister = () => {
    navigate('/auth?type=register');
  };

  return (
    <div className="text-white">
      {user ? (
        <p className="cursor-pointer hover:text-lime-500">{user.username}</p>
      ) : (
        <p>
          <span onClick={handleLogin} className="cursor-pointer hover:text-lime-500">
            Login
          </span>{' '}
          / <span onClick={handleRegister} className="cursor-pointer hover:text-lime-500">Register</span>
        </p>
      )}
    </div>
  );
};

export default HeaderUser;
