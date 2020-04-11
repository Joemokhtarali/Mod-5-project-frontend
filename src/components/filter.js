import React from 'react'
import { Link } from 'react-router-dom'

class Filter extends React.Component {
    // value={this.state.value} onChange={this.handleChange}

    render() {
        return (
            <div>
                <select  onChange={this.props.SelectCategory}>
                    <option value="All">All</option>
                    <option value="Theaters">Theaters</option>
                    <option value="Sports">Sports</option>
                    <option value="Nature">Nature</option>
                    <option value="Art galleries and Museums">Art galleries and Museums</option>
                </select>
                <button >Filter</button>
            </div>
        )
    }
}

export default Filter