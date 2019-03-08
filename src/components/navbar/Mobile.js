import './_mobile.scss';
import React, {Component} from 'react';

class Mobile extends Component {
  state = {
    showMenu: true,
  }
  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu})
  }
  render() {
    let className = this.state.showMenu ? 'mobile-menu show' : 'mobile-menu hide'
    return (
      <React.Fragment>
        <div className='mobile-nav'>
          <h1> Vision Clear </h1>
          <div onClick={this.toggleMenu}> {this.state.showMenu ? 'X' : 'O'} </div>
        </div>

        <ul className={className}>
          <li className='active'> Home </li>
          <li> About </li>
          <li> Interviews </li>
          <li> Blog </li>
        </ul>

      </ React.Fragment>
    )
  }
}

export default Mobile;