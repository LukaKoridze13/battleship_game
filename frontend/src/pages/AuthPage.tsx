import { useSearchParams } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';

export type AuthType = 'login' | 'register';

const AuthPage = () => {
  const searchParams = useSearchParams();
  const type: AuthType = searchParams[0].get('type') as AuthType;
  switch (type) {
    case 'login':
      return <LoginForm />;
    case 'register':
      return <RegisterForm />;
    default:
      return <LoginForm />;
  }
};

export default AuthPage;
