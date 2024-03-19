import menuButton from '../assets/menu-rounded.png';

export default function NavBar() {
  return (
    <div className="nav">
      <h2 className="nav-logo">LOGO</h2>
      <button className="menu-btn">
        <img alt="Menu Button" src={menuButton} />
      </button>
    </div>
  );
}
