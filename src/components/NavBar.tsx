import '../css-modules/Navbar.css';
import logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="navbar-navLinks">
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/charts">Charts</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}
