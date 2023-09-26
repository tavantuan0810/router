import { useState } from 'react';
import ButtonMenu from '../../icons/ButtonMenuIcon';
import LogoIcon from '../../icons/LogoIcon';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setOpen(!open);
  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <header>
      <nav className="navbar">
        <LogoIcon />
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="button-toggle">
          <ButtonMenu />
        </label>
        <ul className="header-content">
          <li>
            <a className="item active">Home</a>
          </li>
          <li>
            <a className="item">About</a>
          </li>
          <li>
            <a className="item">Services</a>
          </li>
          <li>
            <a className="item">Resources</a>
          </li>
          <li>
            <a className="item-last">Projects</a>
          </li>
          <button className="header-button" onClick={handleClick}>
            User
          </button>
          {open && (
            <button className="button-signout" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
