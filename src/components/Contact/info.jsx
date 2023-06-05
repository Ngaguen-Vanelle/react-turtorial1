import React from 'react'
import location from './images/location.png'
import phone from './images/phone.png'
import mail from './images/mail.png'
function info() {
  return (
    <div>
         <div className='info'>
          <div className='info-holder'>
              <img src={phone} alt="phone" />
              <div className='inform'>
                <div className='heading'>
                   Phone
                </div>
                <div className='info-content'>
                   +237 652105066
                </div>
              </div>
          </div>
          
          <div className='info-holder'>
              <img src={location} alt="phone" />
              <div className='inform'>
                <div className='heading'>
                   Location
                </div>
                <div className='info-content'>
        
                 Buea
                </div>
              </div>
          </div>

          <div className='info-holder'>
              <img src={mail} alt="phone" />
              <div className='inform'>
                <div className='heading'>
                  E-Mail
                </div>
                <div className='info-content'>
                  vanellengaguen@amail.com
                </div>
              </div>
          </div>

        </div>
      
    </div>
  )
}

export default info
