import { Link } from 'react-router-dom';
import backArrow from '../assets/back-arrow.svg';
import styles from '../css-modules/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['nav']}>
        <Link to="/" className={`${styles['backArrow']}`}>
          <button>
            <img alt="Go back button" src={backArrow} />
          </button>
        </Link>

        <h2 className={styles['nav-logo']}>LOGO</h2>
      </div>
    </div>
  );
}
