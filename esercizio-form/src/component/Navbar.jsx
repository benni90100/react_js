import { useState } from "react";
import "./Navbar.css"; 

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Il Tuo Logo</div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <li href="/about" name="drop1" onClick={toggleDropdown}>
            About
          </li>
        </li>
        <li className="navbar-dropdown" name="drop2" onClick={toggleDropdown}>
          Servizi
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/service1">Servizio 1</a>
              </li>
              <li>
                <a href="/service2">Servizio 2</a>
              </li>
              <li>
                <a href="/service3">Servizio 3</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="/contact">Contatti</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
