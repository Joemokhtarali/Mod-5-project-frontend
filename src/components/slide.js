import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/homeSlides.css'


const Slide = (props) => {
    console.log(props);
    
    const {image, category_type, about} = props
    return (
        <div className='slide'>
            <Link><img src={image} alt={category_type}/></Link>
        </div>
    )
}

export default Slide