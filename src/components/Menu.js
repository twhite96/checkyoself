import React from 'react';


export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close} to='/'>Home</li>
      <li onClick={close} to='/text'>Text</li>
      {/* <li onClick={close}><Link to='/text'></Link>Text</li>
      <li onClick={close}><Link to='/text'></Link>Text</li> */}
    </ul>
  </div>
);
