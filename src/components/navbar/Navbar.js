import './_navbar.scss';
import React from 'react';
import Mobile from './Mobile.js';
import Desktop from './Desktop.js';
import MediaQuery from 'react-responsive';

const Navbar = () => {
  return (
    <div className='navbar'>
      <MediaQuery minDeviceWidth={768}>
        <Desktop />
      </MediaQuery>
        
      <MediaQuery maxDeviceWidth={768}>
        <Mobile />
      </MediaQuery>
      
    </div>
  );
};

export default Navbar;