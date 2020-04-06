import React from 'react'
import CateogriesContainer from './categoriesContainer'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>Slides Of Categories</h2>
                <h2>Browse By Category</h2>
                <CateogriesContainer />
            </div>
        )
    }
}

export default Home