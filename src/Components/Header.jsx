import {NavLink} from 'react-router-dom'
import './header.css'
import Logo from './Logo'

const Header = () => {
    return (
      <div>
        <div className="header-container">
          <Logo />
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="nav-link">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Header
