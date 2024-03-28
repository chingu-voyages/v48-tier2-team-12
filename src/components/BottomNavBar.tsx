import { NavLink } from 'react-router-dom';
import discover from '../assets/nav-icon--discover.svg'
import home from '../assets/nav-icon--home.svg'
import chart from '../assets/nav-icon--chart.svg'

export default function BottomNavBar() {
    // const stateBtn = () => (
    //     { isActive, isPending }: { isActive:string | undefined, isPending:string | undefined }
    //     ) => isPending ? "pending" : isActive ? "active" : ""

  return (
    <div className='bottom-nav-container'>
      <div className="bottom-nav">

            {/* We should think about Discover/SearchResults here */}
            <NavLink to="" className={""}>
                <img alt="Go to Discover" src={discover} />
                <p>Discover</p>
            </NavLink>
    
            <NavLink to="/" className={""}>
                <img alt="Go to Home" src={home} />
                <p>Home</p>
            </NavLink>
    
            <NavLink to="/charts" className={""}>
                <img alt="Go to Charts" src={chart} />
                <p>Charts</p>
            </NavLink>
      </div>
    </div>
  );
}
