import React from 'react'
import propTypes from 'prop-types'

export default function Filter ({ filter, setFilter }) {
  return (
      <label>Filter
        <input 
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      </label>
  )
}

Filter.propTypes = {
  filter : propTypes.string.isRequired,
  setFilter : propTypes.func.isRequired
}