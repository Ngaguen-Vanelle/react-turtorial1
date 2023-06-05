import React from 'react';
import './about.css';
import pic from './images/pic.jpg';
function picture() {
  return (
    <div>
      <div className='picture'>
          <img src={pic}/>
      </div>
    </div>
  )
}

export default picture
