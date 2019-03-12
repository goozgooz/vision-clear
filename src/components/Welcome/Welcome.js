import './_welcome.scss';
import React from 'react';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1> Welcome to Vision Clear  </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis urna ipsum, eu feugiat ante condimentum sed. In in elementum ex. Nulla dolor odio, lobortis sed nulla ac, ornare porta neque. Nullam ornare est et metus finibus, gravida aliquet metus. </p>
      <img alt='chavor' src={require('./chavo.jpg')} />
    </div>
  )
}

export default Welcome;