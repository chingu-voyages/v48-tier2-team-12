import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BottomNavBar from '../components/BottomNavBar';

const Layout = () => {
  return (
    <div className='main-container'>
      <NavBar />
      <Outlet />
      <BottomNavBar />
    </div>
  );
};
export default Layout;
