import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BottomNavBar from '../components/BottomNavBar';
import DinoFacts from '../components/DinoFacts';

const Layout = () => {
  return (
    <div className="main-container">
      <NavBar />
      <DinoFacts />
      <Outlet />
      <BottomNavBar />
    </div>
  );
};
export default Layout;
