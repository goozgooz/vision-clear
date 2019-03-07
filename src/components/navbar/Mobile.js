import './_mobile.scss';
import React, {Component} from 'react';

class Mobile extends Component {
  state = {
    showMenu: false,
  }
  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu})
  }
  render() {
    return (
      <div className='mobile-nav'>
        <h1> Vision Clear </h1>
        <div onClick={this.toggleMenu}> {this.state.showMenu ? 'X' : 'O'} </div>
      </div>
    )
  }
}

export default Mobile;