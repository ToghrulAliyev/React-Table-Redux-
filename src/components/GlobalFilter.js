import React from 'react'

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <>
           
            <div className='input-div'>
                <input
                    type="text"
                    className='input'
                    placeholder='search'
                    value={filter || ''}
                    onChange={e => setFilter(e.target.value)} />
            </div>
        </>
    )
}

export default GlobalFilter