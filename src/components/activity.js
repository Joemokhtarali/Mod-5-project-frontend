import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/index.css'

const Activity = (props) => { 

    const { name, image, id, address, index ,date} = props.activity
    return (
        <div>
            <div className='activity' id={`activity-${index}`}>
                <Link to={`/activities/${id}`}><img className='img' src={image} alt={name} /></Link>
            </div>
            <p className='info' style={{ textAlign: "center" }}>{name}
                <br />
                {date}
            </p>
        </div>
    )
}


export default Activity