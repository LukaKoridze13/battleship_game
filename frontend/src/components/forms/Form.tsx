import { Link } from 'react-router-dom';
import { AuthType } from '../../pages/AuthPage';

export type FormType = AuthType;

interface Props {
  children: React.ReactNode;
  title: string;
  button: string;
  className?: string;
  type: FormType;
  onSubmit:any;
}
const Form = ({ children, className, title, button, type,onSubmit }: Props) => {
  let element;
  switch (type) {
    case 'login':
      element = (
        <p className='text-center mt-5 text-zinc-300'>
          Don't have an account?{' '}
          <Link className="font-medium italic hover:text-white" to="/auth?type=register">
            Register
          </Link>
        </p>
      );
      break;
    case 'register':
      element = (
        <p className="mt-5 text-center text-zinc-300">
          Already have an account?{' '}
          <Link className="font-medium italic hover:text-white" to="/auth?type=login">
            Login
          </Link>
        </p>
      );
      break;

    default:
      element = null;
      break;
  }
  return (
    <form onSubmit={onSubmit} className={`mx-auto flex flex-col gap-3 w-full max-w-[300px] rounded-lg ${className}`}>
      <h2 className="mb-2 text-center text-lg text-white">{title}</h2>
      {children}
      <button className="mx-auto mt-1 block rounded border border-black bg-white px-4 py-1 capitalize hover:border-white hover:bg-black hover:text-white" type="submit">
        {button}
      </button>
      {element}
    </form>
  );
};

export default Form;
