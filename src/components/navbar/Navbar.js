import React from 'react';
import Mobile from './Mobile.js';
// import Desktop from './desktop.js';
import MediaQuery from 'react-responsive';

const Navbar = () => {
  return (
    <React.Fragment>
      <MediaQuery minDeviceWidth={768}>
        {/* <Desktop /> */}
        <h1> Navbar </h1>
      </MediaQuery>
        
      <MediaQuery maxDeviceWidth={768}>
        <Mobile />
      </MediaQuery>
      
    </React.Fragment>
  );
};

export default Navbar;