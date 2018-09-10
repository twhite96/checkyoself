/* jshint ignore: start */

import React from 'react';


import broken from '../images/imbroken.GIF'

function NotFound(props) {
  return (
    <div className="page-container">
      <h1 className="title">404</h1>
      <img src={broken} alt="broken..." />
      <p>Well...this is embarrassing. Whatever you were looking for isn't here.</p>
    </div>
  )
}


export default NotFound;
