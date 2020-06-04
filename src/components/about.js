import React from 'react';
import './about.css'

export default function About(){

    return (
        <div className='about' >
            {about}
        </div>
    )
}

let about = <p className='about-p'>
    My Activities is for World Travelers who love to travel and meet new friends, get to meet locals. <br/>
    My Activities come with websockets where participants can chat together to make arrangements for activity. <br/>
    Buit with: React & Rails & Material Ui for styling
</p>