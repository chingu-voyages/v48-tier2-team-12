import backArrow from '../assets/back-arrow.svg'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='nav-bar-container'>
      <div className="nav"> 
        <Link to="/" className="backArrow">
          <button>
              <img alt="Go back button" src={backArrow} />
          </button>
        </Link>
        
        <h2 className="nav-logo">LOGO</h2>
      </div>
    </div>
  );
}
