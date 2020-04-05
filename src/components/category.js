import React from 'react'


class Category extends React.Component{

    render(){
        return(
            <div className='category'>
                <p> Category: {this.props.category.category_type} </p>
            </div>
        )
    }
}


export default Category