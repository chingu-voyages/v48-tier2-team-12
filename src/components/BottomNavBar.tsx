import { NavLink } from 'react-router-dom';
import discover from '../assets/nav-icon--discover.svg';
import home from '../assets/nav-icon--home.svg';
import chart from '../assets/nav-icon--chart.svg';
import '../css-modules/BottomNavbar.css';

export default function BottomNavBar() {
  return (
    <div className="bottomNav">
      <NavLink to="/discover" className="bottomNav-navLink">
        <div className="bottomNav-topBorder"></div>
        <img alt="Go to Discover" src={discover} />
        <p>Discover</p>
      </NavLink>

      <NavLink to="/" className="bottomNav-navLink">
        <div className="bottomNav-topBorder"></div>
        <img className="nav-img" alt="Go to Home" src={home} />
        <p>Home</p>
      </NavLink>

      <NavLink to="/charts" className="bottomNav-navLink">
        <div className="bottomNav-topBorder"></div>
        <img className="nav-img" alt="Go to Charts" src={chart} />
        <p>Charts</p>
      </NavLink>
    </div>
  );
}
