import React from 'react'

const Searchitem = (props) => {
    return (
        <div>
            <input
            className='search-box'
            type='search'
            placeholder='search for Robots'
            onChange={props.onSearchChange}
            />
        </div>
    )
}
export default Searchitem
