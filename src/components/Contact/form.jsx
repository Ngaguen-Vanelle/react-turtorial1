import React from 'react'
import  { useRef } from 'react';
function form() {

  return (
    <div>
       <form className='form'>
          <div className='heading'>
            Send Message
          </div>
          <div className='input'>
          <input type='text' placeholder='Full Name' name='user_name' required></input>
          </div>
          <div className='input'>
          <input type='text' placeholder='Your Mail Address'  name="user_email"></input>
          </div>
          <div className='input'>
          <input type='text' placeholder='Your Subject'  name="subject"></input>
          </div>
          <div className='input'>
          <input type='textarea' placeholder='Write your Message' name='message'></input>
          </div>

          <button type='submit' className='btn' >Submit</button>
          
        </form>
        </div>

  )
}

export default form
