import React from 'react'
import './testimonial.css';
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import pic5 from './images/pic5.jpg'
import pic6 from './images/pic6.jpg'
import pic7 from './images/pic7.jpg'
import pic8 from './images/pic8.jpg'
import pic9 from './images/pic9.jpg'

function testimonial() {
  return (
    <div id='testimonial'>
        <div classNameName="testimonial">
          <div className="heading">
           <center><span>T</span>estimonials</center> 
          </div>
          <p>Here are some of the testimonials from my clients who had intrest in my work. </p>
          <div className="container">
           
            <div className="testimonial-card">
               <img src={pic1} alt="a picture"/>
                <div className="content">
               <span className='name'>Kels Beauty</span>
               <span>AWESOME, I really liked my logo .</span>
               <button>View Comments</button>
                </div>
                </div>
                
                <div className="testimonial-card">
               <img src={pic2} alt="a picture"/>
                <div className="content">
               <span className='name'>Samira GL</span>
               <span>i love the styling of my website and my clients do appreciate. you offer yhe best.</span>
               <button>View Comments</button>
                </div>
                </div>



                <div className="testimonial-card">
               <img src={pic3} alt="a picture"/>
                <div className="content">
               <span className='name'>Tilanie AS</span>
               <span>the most interest part i love on a website is its responsiveness.i love of my website.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic4} alt="a picture"/>
                <div className="content">
               <span className='name'>Espina MN</span>
               <span>the design you did for my company ishighly proffesional. thank you .</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic5} alt="a picture"/>
                <div className="content">
               <span className='name'>Ivana B</span>
               <span> Awesome !! you offer yhe best.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic6} alt="a picture"/>
                <div className="content">
               <span className='name'>Jessica F</span>
               <span> You are fast and reliable.</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic7} alt="a picture"/>
                <div className="content">
               <span className='name'>Abou NJ</span>
               <span>i love the styling of my website.</span>
               <button>View Comments</button>
                </div>
                </div>
                
                <div className="testimonial-card">
               <img src={pic8} alt="a picture"/>
                <div className="content">
               <span className='name'>Zidane NK</span>
               <span>I received my order in less than 48hrs. You are very fast and reliable. thanks</span>
               <button>View Comments</button>
                </div>
                </div>

                <div className="testimonial-card">
               <img src={pic9} alt="a picture"/>
                <div className="content">
               <span className='name'>Anslem PC</span>
               <span>You offer the best service. My flyer is so attractive and highly proffessional</span>
               <button>View Comments</button>
                </div>
                </div>

               

                
               
               

         
               </div>
               </div>
          </div>
  )
}

export default testimonial
