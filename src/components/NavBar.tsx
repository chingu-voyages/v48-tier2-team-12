import styles from '../css-modules/Navbar.module.css';
import logo from '..//assets/logo.svg';

export default function Navbar() {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['nav']}>
        <img src={logo} alt="logo" className={styles['nav-logo']} />
      </div>
    </div>
  );
}
