import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import BottomNavBar from '../components/BottomNavBar';
import DinoFacts from '../components/DinoFacts';
import { fetchDinos } from '../utils/api';
import { altPics } from '../utils/pretty-pics';

export const loader = async () => {
  try {
    const data = await fetchDinos();
    data.forEach((item) => {
      altPics.forEach((element) => {
        //for rendering small imgs on the grid when available:
        if (element.smallImg && item.id === element.id) {
          item.imageSrc = element.smallImg;
        }
      });
    });
    return data;
  } catch (error) {
    return { error: error, msg: 'Error fetching dinosaurs:' };
  }
};

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
