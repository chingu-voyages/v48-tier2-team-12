import Navbar from '../components/NavBar';
import notFound from '../assets/not-found.svg';
import styles from '../css-modules/NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <img src={notFound} alt="Page Not Found" />
        <div className={styles.text}>
          <h3>Page not found</h3>
          <p>We are sorry but the page you are looking for does not exist.</p>
          <Link to="/">Go to home</Link>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
