import styles from '../css-modules/Navbar.module.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={styles['nav-container']}>
      <Link to="/" className={styles['nav-logo']}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}
