import React from 'react'

const home = () => {
  return (
    <div className='homebar'>
        <h1>Home</h1>
        <div className='filters'>
            <button>Sort by Title Asc</button>
            <button>Sort by Title Desc</button>
            <button>Sort by Price Asc</button>
            <button>Sort by Price Desc</button>

        </div>
    </div>
  )
}

export default home