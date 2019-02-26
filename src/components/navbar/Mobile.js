import './_mobile.scss';
import React, {Component} from 'react';
import {fallDown as Menu} from 'react-burger-menu';

class Mobile extends Component {
  showSettings(e){
    e.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Menu width={'100%'}>
          <a id="home" className="menu-item" href="/"> Home </a>
          <a id="about" className="menu-item" href="/about"> About </a>
          <a id="contact" className="menu-item" href="/contact"> Contact </a>
        </Menu>
      </React.Fragment>
    )
  }
}

export default Mobile;