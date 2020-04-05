import React from 'react'


class Category extends React.Component{

    render(){
        return(
            <div className='category'>
                <h1> Category: {this.props.category.category_type} </h1>
            </div>
        )
    }
}


export default Category