import React from 'react'
import '../stylesheets/homeSlides.css'
import Slide from './slide'


const HomeSlides = (props) => {

   
//     var slideIndex = 1;
//     props.showSlides(slideIndex)

//     // Next/previous controls
//     const plusSlides = (n) => { 
//         props.showSlides(slideIndex += n);
//     }

//     // Thumbnail image controls
//    const currentSlide = (n) => {
//         props.showSlides(slideIndex = n);
//     }

//     props.showSlides = (n) => {
//         var i;
//         var slides = document.getElementsByClassName("mySlides");
//         var dots = document.getElementsByClassName("dot");
//         if (n > slides.length) { slideIndex = 1 }
//         if (n < 1) { slideIndex = slides.length }
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex - 1].style.display = "block";
//         dots[slideIndex - 1].className += " active";
//     }
    const renderSlides = () => {
        
        return props.categories.map(category =>  <Slide key={category.id} {...category}/>)
    }
    
    console.log(props.categories);
    return (
        <div className='homeSlides'>
           {props.categories ? renderSlides(): <h1>NOT SHOWING</h1>}
        </div>
    )
}



export default HomeSlides