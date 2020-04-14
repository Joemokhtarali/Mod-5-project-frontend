import React from 'react'

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
            </div>
        )
    }
}

export default Filter