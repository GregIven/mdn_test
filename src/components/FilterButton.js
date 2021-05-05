import React from 'react'

const FilterButton = ({ category }) => {
    return (
        <div>
            <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>{category}</span>
          <span className="visually-hidden"> tasks</span> 
        </button>
        </div>
    )
}

export default FilterButton
