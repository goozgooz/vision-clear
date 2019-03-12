import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';

class Home extends Component {  
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Welcome />
      </React.Fragment>
    );
  }
}

export default Home;