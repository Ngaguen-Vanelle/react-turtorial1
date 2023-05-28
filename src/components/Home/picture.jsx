import React from "react";
import photo from './images/photo.jpg';

function Picture(){
    return(
        <div className='picture'>
         <img src={photo} />
        </div>
    )  
}
export default Picture;