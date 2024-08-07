import { Outlet } from 'react-router-dom';

import Logo from '../simple/Logo';
import OnlineUsers from '../simple/OnlineUsers';
import Content from '../containers/Content';
import Nav from './Nav';

const Header = () => {
  return (
    <main className="bg-black">
      <header className="fixed z-10 w-full">
        <Content className="flex relative items-center justify-between">
          <Logo />
          <Nav />
          <OnlineUsers />
        </Content>
      </header>
      <Outlet />
    </main>
  );
};

export default Header;
