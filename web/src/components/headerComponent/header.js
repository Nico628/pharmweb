import React from 'react';

import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <header>

    <img src="/images/pharm.png" />
    <div class="name">XXX Pharmacy</div>

    <nav>
      <ul>
        <li className="first">
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/About">ABOUT US</Link>
        </li>
        <li className="last">
          <Link to="/Contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>

    </header>
  );
}

export default Header;
