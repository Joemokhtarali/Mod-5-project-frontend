import React from 'react'

class ActivitiesContainer extends React.Component {

    state ={
        activities: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/activities').then(resp => resp.json()).then(data => this.setState({activities: data}))
    }

    render() {
        console.log(this.state.activities);
        
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default ActivitiesContainer