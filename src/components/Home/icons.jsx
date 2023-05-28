import React from "react";
import facebook from './images/facebook.png';
import github from './images/github.png';
import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import whatsapp from './images/whatsapp.png';


function Icons(){
    return(
        <div className='icons'>
            <img src={facebook}/> 
            <img src={twitter}/> 
            <img src={github}/> 
            <img src={linkedin}/> 
            <img src={whatsapp}/> 
        </div>
    )  
}
export default Icons;