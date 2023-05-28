import React from "react";
import { ReactDOM } from "react";
import './home.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import wordpress from './images/wordpress.png';
{/*intro*/}
function Intro(){
    return(
        <div className='intro'>
            <div className='holder'>
           
                <div className='heading'>
                    <span>I'm</span> NGAGUEN VANELLE
                </div>
                <div className='info'>A Website Developer</div>
               
               <div className='skills'>
                    <img src={html}  className='skill-img'/> 
                    <img src={css} className='skill-img' /> 
                    <img src={js}  className='skill-img'/> 
                    <img src={react} className='skill-img'/> 
                    <img src={wordpress} className='skill-img'/> 
               </div>
               <div className='button-holder'>
                
               <button>Let's Talk</button>
               
               <button>Download CV</button>
               </div>
              
               
               
            </div>
            
        </div>
    )  
}
export default Intro;
{/*end of intro*/} 