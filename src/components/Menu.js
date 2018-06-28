import React from 'react';
import { NavLink } from 'react-router-dom';

export default({close}) => (
  <div className='menu'>
    <ul>
      <li>
        <NavLink onClick={close} activeClassName='current' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={close} to='/text'>
          Text
        </NavLink>
      </li>
      {/* <li>
        <NavLink onClick={close} to='contact'>
          Contact
        </NavLink>
      </li> */}
    </ul>
  </div>
);
