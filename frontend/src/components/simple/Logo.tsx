import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';
const Logo = () => {
  return (
    <Link to="/">
      <img className='w-10 rounded-full' src={LogoImg} alt="Logo" />
    </Link>
  );
};

export default Logo;
