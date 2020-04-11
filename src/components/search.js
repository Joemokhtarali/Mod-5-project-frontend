import React from 'react'
import '../../src/index.css'

const Search = (props) => {
    return (
        <div>
            <div className="ui large fluid icon input">
                <input
                    type="text"
                    placeholder={"Search Activity"}
                    onChange={props.changeSearchInput}
                />
                <button onClick={props.changeButtonState}>Search</button>
            </div>
        </div>
    )
}


export default Search